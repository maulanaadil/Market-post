import create from 'zustand';

export const useDataStore = create((set) => ({
  accountData: [],
  showListAccount: false,
  authUser: null,
  loading: false,

  setAccountData: (accountData) => set({ accountData }),
  setShowListAccount: (showListAccount) => set({ showListAccount }),
  setAuthUser: (authUser) => set({ authUser }),
  setLoading: (loading) => set({ loading }),
}));
