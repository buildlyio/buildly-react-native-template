import { useMutation } from '@tanstack/react-query';
import httpService from '../../../services/httpService';
import oauthService from '../../../services/oauthService';
import Config from 'react-native-config';

export const useLoginMutation = displayAlert => {
  return useMutation({
    mutationFn: async loginData => {
      const token = await oauthService.authenticateWithPasswordFlow(loginData);
      console.log('token', token);

      oauthService.setAccessToken(token.data);

      const user = await httpService.makeRequest(
        'get',
        `${Config.OAUTH_TOKEN_URL}coreuser/me/`,
      );
      oauthService.setOauthUser(user, { loginData });

      const coreuser = await httpService.makeRequest(
        'get',
        `${Config.OAUTH_TOKEN_URL}coreuser/`,
      );
      oauthService.setCurrentCoreUser(coreuser, user);

      return user;
    },
    onSuccess: data => {
      oauthService.setAccessToken(token.data);
      displayAlert('success', 'Sign in successful');
    },
    onError: err => {
      console.log('ERROR =>', err);

      displayAlert('error', 'Sign in failed');
    },
  });
};
