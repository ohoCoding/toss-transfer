import { supabase } from '@/lib/supabaseClient';

type AccountType = 'KB' | 'KAKAO';

interface Account {
  id: number;
  name: string;
  balance: number;
  bookmark: boolean;
  type: AccountType;
}

export const getAccounts = async (): Promise<Account[]> => {
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .returns<Account[]>(); // <- 명확한 타입 지정

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const remitAccount = async (id: number, money: number) => {
  await supabase.from('accounts').upsert({ id, balance: money });
};
