import { useMutation } from '@tanstack/react-query';
import httpService from '../../../services/httpService';
import oauthService from '../../../services/oauthService';
import Config from 'react-native-config';

export const useLoginMutation = displayAlert => {
  return useMutation({
    mutationFn: async loginData => {
      const token = await oauthService.authenticateWithPasswordFlow(loginData);
      oauthService.setAccessToken(token.data);

      const oauthuser = httpService.makeRequest(
        'get',
        `${Config.API_URL}coreuser/me/`,
      );

      oauthService.setOauthUser(oauthuser, oauthuser);

      const coreuser = httpService.makeRequest(
        'get',
        `${Config.API_URL}coreuser/`,
      );

      oauthService.setCurrentCoreUser(oauthuser, coreuser);
    },
    onSuccess: data => {
      oauthService.setAccessToken(token.data);
      displayAlert('success', 'Sign in successful');
    },
    onError: err => {
      displayAlert('error', 'Sign in failed');
    },
  });
};
