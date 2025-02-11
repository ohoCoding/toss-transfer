import { create } from 'zustand';

interface State {
  accountId: number;
  money: number;

  source: {
    account: string;
    balance: number;
  };

  target: {
    id: number;
    name: string;
    account: string;
    type: string;
  };
  saveAccountId: (id: number) => void;
  setSource: (account: string, balance: number) => void;
}

const init = {
  accountId: 0,
  money: 0,

  source: {
    account: '',
    balance: 0,
  },

  target: {
    id: 0,
    name: '',
    account: '',
    type: '',
  },
};

const useStore = create<State>()((set) => ({
  ...init,
  saveAccountId: (id) => set({ accountId: id }),
  setSource: (account: string, balance: number) =>
    set({ source: { account, balance } }),
}));

export default useStore;
