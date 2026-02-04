import { create } from "zustand";

export const useSnackbarStore = create((set) => ({
  snackbar: {
    message: "",
    visible: false,
    type: "default", // 'default', 'error'
    duration: 2000,
    onClose: null,
  },
  showSnackbar: (snackbarConfig) =>
    set((state) => ({
      snackbar: { ...state.snackbar, ...snackbarConfig, visible: true },
    })),
  hideSnackbar: () =>
    set((state) => ({
      snackbar: { ...state.snackbar, visible: false },
    })),
}));
