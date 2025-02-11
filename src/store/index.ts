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

const useStore = create<State>()(() => ({
  ...init,
}));

export default useStore;
