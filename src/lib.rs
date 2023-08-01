use diesel::{PgConnection, RunQueryDsl, SelectableHelper};

use crate::models::{NewUser, User};

extern crate argon2;

pub mod db;
pub mod models;
pub mod schema;

pub fn hash_pw(password: &str) -> String {
    let salt = b"some salt";
    let config = argon2::Config::default();
    argon2::hash_encoded(password.as_bytes(), salt, &config).unwrap()
}

pub fn insert_user(conn: &mut PgConnection, email: &str, name: &str, password_hash: &str) -> User {
    use crate::schema::users;
    let new_user = NewUser {
        email,
        name,
        password_hash,
    };

    diesel::insert_into(users::table)
        .values(&new_user)
        .returning(User::as_returning())
        .get_result(conn)
        .expect("Error saving new user")
}
