use std::env;

use dotenvy::dotenv;
use salvo::prelude::*;
use vox_box_backend::db;

extern crate argon2;

#[handler]
async fn hello() -> &'static str {
    "Hello World"
}

#[tokio::main]
async fn main() {
    dotenv().expect(".env file not found!");
    tracing_subscriber::fmt().init();

    let db_url: String = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");

    db::init(&db_url);

    let router = Router::new().get(hello);
    let acceptor = TcpListener::new("127.0.0.1:5800").bind().await;
    Server::new(acceptor).serve(router).await;
}
