-- Enable RLS on the contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous users to insert into contact_submissions
CREATE POLICY "Allow anonymous insert for contact submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to view contact_submissions
CREATE POLICY "Allow authenticated users to view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (true);

-- Enable RLS on the newsletter_subscriptions table
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous users to insert into newsletter_subscriptions
CREATE POLICY "Allow anonymous insert for newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to view newsletter_subscriptions
CREATE POLICY "Allow authenticated users to view newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
TO authenticated
USING (true);

-- Grant permissions to the anon role
GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.newsletter_subscriptions TO anon;

-- Grant permissions to the authenticated role
GRANT SELECT ON public.contact_submissions TO authenticated;
GRANT SELECT ON public.newsletter_subscriptions TO authenticated;
GRANT SELECT ON public.active_subscribers TO authenticated; 