import React, { useMemo, useReducer, useContext } from 'react';
import authuserActions from './authuserActions';
import reducer, { initialState } from './authuserReducer';
import { Config } from 'react-native-config';
import oauthService from '../../services/oauthService';
import httpService from '../../services/httpService';

/**
 * Context for the authuser state
 */
const AuthuserContext = React.createContext(initialState);

function AuthuserProvider({ children }) {
  const [authState, dispatch] = useReducer(reducer, initialState || {});

  /**
   * Attempts to log the user into the application
   * @param {object} payload the form data
   * @param {string} payload.username the username of the account
   * @param {string} payload.password the password for the account
   */
  const login = payload => {
    dispatch(authuserActions.login(payload));

    oauthService
      .authenticateWithPasswordFlow(payload)
      .then(token => {
        oauthService.setAccessToken(token.data);

        const oauthuser = httpService.makeRequest(
          'get',
          `${Config.API_URL}coreuser/me/`,
        );
        return oauthuser;
      })
      .then(oauthuser => {
        oauthService.setOauthUser(oauthuser, oauthuser);

        const coreuser = httpService.makeRequest(
          'get',
          `${Config.API_URL}coreuser/`,
        );
        return { oauthuser, coreuser };
      })
      .then(({ oauthuser, coreuser }) => {
        oauthService.setCurrentCoreUser(oauthuser, coreuser);

        dispatch(authuserActions.loginSuccess(oauthuser));
      })
      .catch(error => {
        dispatch(authuserActions.loginFail(error));
      });
  };

  /**
   * Logs the user out of the application
   */
  const logout = () => {
    authuserActions.logout();
    oauthService.logout();
    authuserActions.logoutSuccess();
  };

  /**
   * Attempts to register a new user
   * @param {object} payload the form data
   * @param {string} payload.username the username of the account
   * @param {string} payload.password the password for the account
   * @param {string} payload.email the email of the user
   * @param {string} payload.first_name the first name of the user
   * @param {string} payload.last_name the last name of the user
   * @param {string} payload.organization_name the name of the user's organization
   */
  const register = payload => {
    dispatch(authuserActions.register(payload));
    httpService
      .makeRequest('post', `${Config.API_URL}coreuser/`, payload)
      .then(user => dispatch(authuserActions.registerSuccess(user)))
      .catch(error => dispatch(authuserActions.registerFail(error)));
  };

  const value = useMemo(() => {
    return {
      authState,
      login,
      logout,
      register,
    };
  }, [authState]);

  return (
    <AuthuserContext.Provider value={value}>
      {children}
    </AuthuserContext.Provider>
  );
}

/**
 * Returns the current AuthuserContext value
 */
const useAuthuser = () => useContext(AuthuserContext);
export { AuthuserContext, useAuthuser };
export default AuthuserProvider;
