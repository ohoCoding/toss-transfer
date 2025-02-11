import { supabase } from '@/lib/supabaseClient';

export interface Recent {
  id: number;
  name: string;
  account: string;
  type: string;
  bookmark: boolean;
}

export type RecentResponse = Omit<Recent, 'bookmark'> & { bookmark: string };

export const fetchRecentList = async (): Promise<Recent[]> => {
  const { data, error } = await supabase
    .from('recent')
    .select('*')
    .returns<Recent[]>(); // <- 명확한 타입 지정

  if (error) {
    throw new Error(error.message);
  }

  return data.map((item) => ({
    ...item,
    bookmark: item.bookmark === true,
  }));
};

export const addRecent = async (id: number | string) => {
  await supabase.from('recent').upsert({ id });
};
