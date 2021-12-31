import { http } from 'midgard-core';
import { Config } from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Returns the current access token
 */
async function getAccessToken() {
  const tokenObj = JSON.parse(await AsyncStorage.getItem('token'));
  if (tokenObj) {
    return tokenObj.access_token;
  }
  return null;
}

/**
 * Returns the current JWT token
 */
async function getJwtToken() {
  const tokenObj = JSON.parse(await AsyncStorage.getItem('token'));
  if (tokenObj) {
    return tokenObj.access_token_jwt;
  }
  return null;
}

/**
 * Gets the oauthuser from localstorage
 * @returns {object} oauthUser
 */
async function getOauthUser() {
  const oauthUser = JSON.parse(await AsyncStorage.getItem('oauthUser'));
  if (oauthUser) {
    return oauthUser;
  }
  return null;
}

/**
 * Authenticates user using oauth password flow
 * @param {{username: string; password: string}} credentials the username and password
 */
function authenticateWithPasswordFlow(credentials) {
  const options = {
    method: 'POST',
    data: {
      ...credentials,
      grant_type: 'password',
      client_id: Config.OAUTH_CLIENT_ID,
    },
    returnPromise: true,
  };
  return http.request(Config.OAUTH_TOKEN_URL, options);
}

/**
 * Sets the oauthuser in localstorage
 * @param {string} oauthUser oauth user data
 * @returns {string}
 */
function setOauthUser(oauthUser) {
  AsyncStorage.setItem('oauthUser', JSON.stringify(oauthUser));
  if (oauthUser) {
    return oauthUser;
  }
  return null;
}

/**
 * Sets the coreuser in localstorage
 * @param {string} user user data
 * @param {string} coreuser oauth user data
 * @returns {string}
 */
function setCurrentCoreUser(user, coreuser) {
  const currentUser = user.data.filter(data => data.id === coreuser.data.id);
  AsyncStorage.setItem('currentUser', JSON.stringify(currentUser[0]));
}

/**
 * Checks if there is a valid access token
 */
async function hasValidAccessToken() {
  const valid = await getAccessToken();
  if (valid) {
    const expiresAt = await AsyncStorage.getItem('expires_at');
    const now = new Date();
    if (expiresAt && parseInt(expiresAt, 10) < now.getTime()) {
      return false;
    }
    return true;
  }
  return false;
}

/**
 * Sets access token in the local storage and adds `expires_at` key
 * that indicates the token expiration unix timestamp
 * @param token the token response
 */
function setAccessToken(token) {
  if (token) {
    AsyncStorage.setItem('token', JSON.stringify(token));
    if (token.expires_in) {
      const expiresInMilliSeconds = token.expires_in * 1000;
      const now = new Date();
      const expiresAt = now.getTime() + expiresInMilliSeconds;
      AsyncStorage.setItem('expires_at', expiresAt.toString());
      AsyncStorage.setItem('token_stored_at', now.toString());
    }
  }
}

/**
 * Logs out the user by deleting the access token from the storage
 */
function logout() {
  if (getAccessToken()) {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('expires_at');
    AsyncStorage.removeItem('token_stored_at');
    AsyncStorage.removeItem('oauthUser');
    AsyncStorage.removeItem('currentUser');
  }
}

/**
 * Service for handling authentication
 */
export default {
  authenticateWithPasswordFlow,
  getOauthUser,
  setOauthUser,
  hasValidAccessToken,
  getAccessToken,
  setAccessToken,
  getJwtToken,
  logout,
  setCurrentCoreUser,
};
