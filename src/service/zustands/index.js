import create from 'zustand';

export const useDataStore = create((set) => ({
  accountData: [],
  showListAccount: false,

  setAccountData: (accountData) => set({ accountData }),
  setShowListAccount: (showListAccount) => set({ showListAccount }),
}));
