import React, { useMemo, useReducer, useContext, useEffect } from 'react';
import authuserActions from './authuserActions';
import reducer, { initialState } from './authuserReducer';
import { Config } from 'react-native-config';
import oauthService from '../../services/oauthService';
import { useLoginMutation } from '../../react-query/mutations/authUser/loginMutation';
import { useRegisterMutation } from '../../react-query/mutations/authUser/registerMutation';

/**
 * Context for the authuser state
 */
const AuthuserContext = React.createContext(initialState);

function AuthuserProvider({ children }) {
  const [authState, dispatch] = useReducer(reducer, initialState || {});

  const {
    mutate: loginMutation,
    isLoading: isLoggingIn,
    isError: isLoginError,
  } = useLoginMutation(res => {
    console.log('RESPONSE ==>', res);
  });

  const {
    mutate: registerMutation,
    isLoading: isRegisteringIn,
    isError: isRegisterError,
  } = useRegisterMutation({}, '', () => {});

  /**
   * Attempts to log the user into the application
   * @param {object} payload the form data
   * @param {string} payload.username the username of the account
   * @param {string} payload.password the password for the account
   */
  const login = payload => {
    loginMutation(payload);
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
    registerMutation(payload);
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
