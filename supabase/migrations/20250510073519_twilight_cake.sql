/*
  # Update contact messages table structure

  1. Tables
    - Preserve contact_messages table structure
  2. Security
    - Re-enable RLS
    - Re-create policies
*/

-- Drop and recreate the table while preserving data
CREATE TABLE IF NOT EXISTS contact_messages_new (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  service text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Copy data if table exists
DO $$
BEGIN
  IF EXISTS (SELECT FROM pg_tables WHERE tablename = 'contact_messages') THEN
    INSERT INTO contact_messages_new
    SELECT * FROM contact_messages;
  END IF;
END $$;

-- Drop old table and rename new one
DROP TABLE IF EXISTS contact_messages CASCADE;
ALTER TABLE IF EXISTS contact_messages_new RENAME TO contact_messages;

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Recreate policies
DROP POLICY IF EXISTS "Allow public to insert messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated users to read messages" ON contact_messages;

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

-- Recreate the notification function and trigger
CREATE OR REPLACE FUNCTION notify_new_contact_message()
RETURNS TRIGGER AS $$
BEGIN
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

-- Recreate trigger
DROP TRIGGER IF EXISTS contact_message_notification ON contact_messages;
CREATE TRIGGER contact_message_notification
  AFTER INSERT ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact_message();