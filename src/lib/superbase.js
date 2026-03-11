import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nmalnczybxjaltdmztya.supabase.co'
const supabaseKey = 'ILAGAY DITO ANG ANON KEY NA NA-COPY MO'

export const supabase = createClient(supabaseUrl, supabaseKey)