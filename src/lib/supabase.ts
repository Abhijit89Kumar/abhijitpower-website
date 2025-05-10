import { createClient } from '@supabase/supabase-js';

// Default to empty strings if environment variables are not available
// This prevents the app from crashing in production if the variables are missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a dummy client if credentials are missing
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Some features may not work.');

    // Return a mock client that won't crash the app
    return {
      from: () => ({
        insert: () => Promise.resolve({ error: new Error('Supabase not configured') }),
        select: () => Promise.resolve({ error: new Error('Supabase not configured') }),
      }),
      // Add other methods as needed
    };
  }

  // Create a real client if credentials are available
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false // Since we're using stateless connections
    },
    db: {
      schema: 'public'
    },
    global: {
      headers: {
        'x-my-custom-header': 'contact-form'
      }
    }
  });
};

export const supabase = createSupabaseClient();