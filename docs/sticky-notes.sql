CREATE TYPE "colors" AS ENUM (
  'red',
  'green',
  'blue',
  'yellow'
);

CREATE TABLE "users" (
  "id" bigint PRIMARY KEY,
  "nick_name" varchar(255),
  "email" varchar(255),
  "password" varchar(500)
);

CREATE TABLE "user_settings" (
  "id" bigint PRIMARY KEY,
  "user_id" bigint,
  "theme" varchar(255)
);

CREATE TABLE "cards" (
  "id" bigint PRIMARY KEY,
  "user_id" bigint,
  "group_id" bigint,
  "title" varchar(50),
  "toggle_state" boolean,
  "created_at" bigint,
  "updated_at" bigint
);

CREATE TABLE "card_groups" (
  "id" bigint PRIMARY KEY,
  "name" varchar(50),
  "color" colors
);

CREATE TABLE "notes" (
  "id" bigint PRIMARY KEY,
  "card_id" bigint,
  "content" text,
  "draft" boolean,
  "timestamp" bigint
);

CREATE UNIQUE INDEX ON "users" ("email");

CREATE UNIQUE INDEX ON "card_groups" ("name");

ALTER TABLE "user_settings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "cards" ADD FOREIGN KEY ("group_id") REFERENCES "card_groups" ("id");

ALTER TABLE "notes" ADD FOREIGN KEY ("card_id") REFERENCES "cards" ("id");

