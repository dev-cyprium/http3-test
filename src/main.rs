// use std::env;
use dotenvy::dotenv;
use salvo::{
    conn::rustls::{Keycert, RustlsConfig},
    prelude::*,
};
// use vox_box_backend::db;

extern crate argon2;

// #[handler]
// async fn hello() -> &'static str {
//     "Hello World"
// }

#[tokio::main]
async fn main() {
    dotenv().expect(".env file not found!");
    tracing_subscriber::fmt().init();

    let cert = include_bytes!("../../fullchain.pem").to_vec();
    let key = include_bytes!("../../privkey.pem").to_vec();
    let config = RustlsConfig::new(Keycert::new().cert(cert.as_slice()).key(key.as_slice()));
    let listener = TcpListener::new(("0.0.0.0", 443)).rustls(config.clone());

    // let db_url: String = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");
    // db::init(&db_url);

    // let router = Router::new().get(hello);
    let router = Router::with_path("<**path>").get(
        StaticDir::new(["examples/static"])
            .defaults("index.html")
            .listing(true),
    );

    let acceptor = QuinnListener::new(config, ("0.0.0.0", 443))
        .join(listener)
        .bind()
        .await;

    Server::new(acceptor).serve(router).await;
}
