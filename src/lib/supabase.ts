/**
 * Mock Supabase client for the static site version
 * This file simulates the Supabase functionality without actually connecting to a database
 */

// Mock error type
interface SupabaseError {
  message: string;
  code?: string;
  details?: string;
}

// Mock database types
export interface ContactFormSubmission {
  id?: string;
  name: string;
  email: string;
  message: string;
  status?: string;
  is_read?: boolean;
  created_at?: string;
}

// Mock Supabase client
export const supabase = {
  // Mock contact form submission
  from: (table: string) => ({
    insert: (data: ContactFormSubmission | any) => {
      console.log(`[Mock Supabase] Inserting into ${table}:`, data);
      // Simulate successful insertion with error property
      return {
        error: null as null | SupabaseError,
        data: { ...data, id: `mock-${Date.now()}`, created_at: new Date().toISOString() },
        select: () => ({
          single: () => Promise.resolve({ 
            data: { ...data, id: `mock-${Date.now()}`, created_at: new Date().toISOString() }, 
            error: null as null | SupabaseError
          })
        })
      };
    },
    // Add other methods as needed
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ 
          data: null, 
          error: null as null | SupabaseError 
        })
      })
    })
  }),
  storage: {
    from: (bucket: string) => ({
      upload: (path: string, file: File) => {
        console.log(`[Mock Supabase] Uploading to ${bucket}/${path}`);
        return Promise.resolve({ 
          data: { path }, 
          error: null as null | SupabaseError 
        });
      }
    })
  },
  auth: {
    signUp: () => Promise.resolve({ 
      data: null, 
      error: null as null | SupabaseError 
    }),
    signIn: () => Promise.resolve({ 
      data: null, 
      error: null as null | SupabaseError 
    }),
    signOut: () => Promise.resolve({ 
      error: null as null | SupabaseError 
    })
  }
}; 