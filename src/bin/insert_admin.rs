use std::env;

use diesel::r2d2::PoolError;
use log::info;
use vox_box_backend::db::init;

fn generate_password() -> String {
    use rand::Rng;
    let mut rng = rand::thread_rng();
    let password = (0..8)
        .map(|_| rng.sample(rand::distributions::Alphanumeric))
        .collect();
    String::from_utf8(password).unwrap()
}

fn extract_arg(arg: &str) -> String {
    log::info!("arg: {:?}", arg);
    arg.split(":").nth(1).expect("invalid argument").to_string()
}

fn main() -> Result<(), PoolError> {
    dotenvy::dotenv().expect("failed to read .env file");
    env_logger::init();

    let args = std::env::args().collect::<Vec<_>>();
    let user_email = args.get(1).expect("user email is required");
    let first_name = args.get(2).expect("first name is required");
    let last_name = args.get(3).expect("last name is required");
    let password = generate_password();
    let hashed_password: String = vox_box_backend::hash_pw(&password);
    let db_url: String = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");
    init(&db_url);

    let user_email = extract_arg(user_email);
    let first_name = extract_arg(first_name);
    let last_name = extract_arg(last_name);
    let full_name = format!("{} {}", first_name, last_name);

    info!(
        "Inserting new user {:?} {:?} {:?}",
        user_email, full_name, password
    );
    let mut conn = vox_box_backend::db::connect()?;
    let _user = vox_box_backend::insert_user(&mut conn, &user_email, &full_name, &hashed_password);
    info!("User inserted successfully");
    Ok(())
}
