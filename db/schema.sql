-- Vertex Digital — production submissions table
-- Run this once against your database (e.g. `psql "$DATABASE_URL" -f db/schema.sql`)
-- before setting DATABASE_URL in your deployment environment.

-- Safe no-op on Postgres 13+, where gen_random_uuid() is built in; keeps
-- this script compatible with older Postgres versions and most managed
-- providers (Supabase, Neon, RDS, etc.) either way.
create extension if not exists pgcrypto;

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('contact', 'newsletter')),
  status text not null default 'new',
  payload jsonb not null,
  ip_hash text,
  submitted_at timestamptz not null default now()
);

create index if not exists submissions_type_idx
  on submissions (type);

create index if not exists submissions_submitted_at_idx
  on submissions (submitted_at desc);

-- Prevent the same email from subscribing to the newsletter twice. Contact
-- submissions are intentionally NOT constrained this way — the same person
-- may have several genuine project inquiries over time.
create unique index if not exists submissions_unique_newsletter_email
  on submissions ((payload->>'email'))
  where type = 'newsletter';
