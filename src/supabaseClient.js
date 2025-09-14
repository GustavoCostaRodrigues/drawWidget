import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://egoslyuvsnavekhcisup.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnb3NseXV2c25hdmVraGNpc3VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MDMxOTQsImV4cCI6MjA3MzI3OTE5NH0.gF1uMUYlCDC6naf4CzsZGmjem3hgNQOx2cGXFNdu8Dw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);