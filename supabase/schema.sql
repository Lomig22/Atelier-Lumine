-- Requires pgcrypto extension for gen_random_uuid in some projects
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  config jsonb not null,
  price numeric not null,
  status text not null default 'pending',
  stripe_session_id text,
  customer jsonb
);

create index if not exists orders_created_at_idx on orders (created_at desc);
