-- Create RSVPs table
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  attending boolean not null default true,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.rsvps enable row level security;

-- Create policies to allow public read/write (since this is a simple invitation system)
-- For production, you might want to restrict this further
create policy "Allow public to view RSVPs"
  on public.rsvps for select
  using (true);

create policy "Allow public to insert RSVPs"
  on public.rsvps for insert
  with check (true);

create policy "Allow public to update RSVPs"
  on public.rsvps for update
  using (true);

create policy "Allow public to delete RSVPs"
  on public.rsvps for delete
  using (true);
