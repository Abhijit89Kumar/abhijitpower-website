/*
  # Create contact messages table with basic notification

  1. Tables
    - `contact_messages` table with all required columns
  2. Security
    - Enable RLS
    - Add policies for public insert and authenticated read access
*/

-- Drop existing table and policies if they exist
DROP TABLE IF EXISTS contact_messages CASCADE;

CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  service text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public to insert messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated users to read messages" ON contact_messages;

-- Create policies with explicit permissions
CREATE POLICY "Allow public to insert messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT INSERT ON contact_messages TO anon;
GRANT INSERT ON contact_messages TO authenticated;
GRANT SELECT ON contact_messages TO authenticated;

-- Create a simple notification function using pg_notify
CREATE OR REPLACE FUNCTION notify_new_contact_message()
RETURNS TRIGGER AS $$
BEGIN
  -- Using pg_notify for simple notification
  PERFORM pg_notify(
    'new_contact_message',
    json_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'service', NEW.service,
      'message', NEW.message
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for new messages
DROP TRIGGER IF EXISTS contact_message_notification ON contact_messages;
CREATE TRIGGER contact_message_notification
  AFTER INSERT ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact_message();