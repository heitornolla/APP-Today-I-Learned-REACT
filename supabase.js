import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hqprbpqrzytgvtzzvsmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxcHJicHFyenl0Z3Z0enp2c21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExODIyNzEsImV4cCI6MTk5Njc1ODI3MX0.FDGceWZgmpzfI-GNzEum2CV8JSpcB0szy-yVZj6WKbI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
