-- Your SQL goes here
create table users (
  id serial primary key,
  name varchar(255) not null,
  email varchar(255) unique not null,
  password_hash varchar(255) not null,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);
