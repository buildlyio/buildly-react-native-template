import { create } from "zustand";
import oauthService from "@core-services/oauthService";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  // Set user and authentication status
  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),

  // Logout Function
  logout: () => {
    oauthService.logout();
    set({ user: null, isAuthenticated: false, isLoading: false });
  },

  // Check Authentication at App Start
  checkAuth: async () => {
    const isValid = await oauthService.hasValidAccessToken();
    if (isValid) {
      const oauthuser = await oauthService.getOauthUser();
      set({ user: oauthuser, isAuthenticated: true, isLoading: false });
    } else {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));

export default useAuthStore;
