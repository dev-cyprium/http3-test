use diesel::prelude::*;
use diesel::r2d2::{ConnectionManager, Pool, PoolError, PooledConnection};
use once_cell::sync::OnceCell;

type PgPool = Pool<ConnectionManager<PgConnection>>;
static DB_POOL: OnceCell<PgPool> = OnceCell::new();

pub fn connect() -> Result<PooledConnection<ConnectionManager<PgConnection>>, PoolError> {
    DB_POOL.get().unwrap().get()
}

fn build_pool(database_url: &str, size: u32) -> Result<PgPool, PoolError> {
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    Pool::builder()
        .max_size(size)
        .min_idle(Some(size))
        .test_on_check_out(false)
        .idle_timeout(None)
        .max_lifetime(None)
        .build(manager)
}

pub fn init(database_url: &str) {
    DB_POOL
        .set(build_pool(database_url, 10).expect(&format!("Error connecting to {}", database_url)))
        .ok();
}
