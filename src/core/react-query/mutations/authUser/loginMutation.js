import { useMutation } from "@tanstack/react-query";

import httpService from "@core-services/httpService";
import oauthService from "@core-services/oauthService";
import useAuthStore from "@core-zustand/useAuthStore";
import { useSnackbarStore } from "@core-zustand/alert/snackbarStore";
import { t } from "@core-localization";

export const useLoginMutation = () => {
  const { showSnackbar } = useSnackbarStore();
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: async (loginData) => {
      const token = await oauthService.authenticateWithPasswordFlow(loginData);
      oauthService.setAccessToken(token.data);
      const oauthuser = await httpService.makeRequest(
        "get",
        `${process.env.EXPO_PUBLIC_API_URL}coreuser/me/`,
      );

      oauthService.setOauthUser(oauthuser);

      const coreuser = await httpService.makeRequest(
        "get",
        `${process.env.EXPO_PUBLIC_API_URL}coreuser/`,
      );

      oauthService.setCurrentCoreUser(coreuser, oauthuser);
      return oauthuser;
    },
    onSuccess: (user) => {
      setUser(user);
      showSnackbar({
        message: t("successMsgs.signInSuccess"),
        type: "default",
      });
    },
    onError: (err) => {
      console.log("err", err);

      showSnackbar({
        message: t("errors.signInFailed"),
        type: "error",
      });
    },
  });
};
