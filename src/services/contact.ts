import { supabase } from '@/lib/supabaseClient';

export interface Contact {
  id: number;
  name: string;
  phone: string;
  account: string;
  type: string;
}

export const fetchContactList = async (): Promise<Contact[]> => {
  const { data, error } = await supabase
    .from('contact')
    .select('*')
    .returns<Contact[]>(); // <- 명확한 타입 지정

  if (error) {
    throw new Error(error.message);
  }
  return data || [];
};
