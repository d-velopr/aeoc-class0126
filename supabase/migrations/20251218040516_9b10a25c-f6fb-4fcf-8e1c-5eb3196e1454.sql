-- Create registrations table for workshop signups
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration form)
CREATE POLICY "Anyone can submit registration"
ON public.registrations
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view registrations (for admin purposes)
CREATE POLICY "Authenticated users can view registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (true);