import { useReducer } from 'react';
import Config from 'react-native-config';
import { useMutation } from '@tanstack/react-query';

import reducer, { initialState } from '../../../state/authuser/authuserReducer';
import httpService from '../../../services/httpService';
import oauthService from '../../../services/oauthService';
import authuserActions from '../../../state/authuser/authuserActions';

export const useLoginMutation = displayAlert => {
  const [dispatch] = useReducer(reducer, initialState || {});

  return useMutation({
    mutationFn: async loginData => {
      dispatch(authuserActions.login(loginData));
      const token = await oauthService.authenticateWithPasswordFlow(loginData);
      oauthService.setAccessToken(token.data);

      const oauthuser = await httpService.makeRequest(
        'get',
        `${Config.API_URL}coreuser/me/`,
      );

      oauthService.setOauthUser(oauthuser);

      const coreuser = await httpService.makeRequest(
        'get',
        `${Config.API_URL}coreuser/`,
      );

      oauthService.setCurrentCoreUser(coreuser, oauthuser);
      return oauthuser;
    },
    onSuccess: data => {
      dispatch(authuserActions.loginSuccess(data));
      displayAlert('success', 'Sign in successful');
    },
    onError: err => {
      dispatch(authuserActions.loginFail(err));
      displayAlert('error', 'Sign in failed');
    },
  });
};
