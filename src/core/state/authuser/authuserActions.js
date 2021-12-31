export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'AUTH/LOGIN_FAIL';

export const LOGOUT = 'AUTH/LOGOUT';
export const LOGOUT_SUCCESS = 'AUTH/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'AUTH/LOGOUT_FAIL';

export const REGISTER = 'AUTH/REGISTER';
export const REGISTER_SUCCESS = 'AUTH/REGISTER_SUCCESS';
export const REGISTER_FAIL = 'AUTH/REGISTER_FAIL';

export const SEND_PASSWORD_RESET_LINK = 'AUTH/SEND_PASSWORD_RESET_LINK';
export const SEND_PASSWORD_RESET_LINK_SUCCESS =
  'AUTH/SEND_PASSWORD_RESET_LINK_SUCCESS';
export const SEND_PASSWORD_RESET_LINK_FAIL =
  'AUTH/SEND_PASSWORD_RESET_LINK_FAIL';

export const VALIDATE_RESET_PASSWORD_TOKEN =
  'AUTH/VALIDATE_RESET_PASSWORD_TOKEN';
export const VALIDATE_RESET_PASSWORD_TOKEN_SUCCESS =
  'AUTH/VALIDATE_RESET_PASSWORD_TOKEN_SUCCESS';
export const VALIDATE_RESET_PASSWORD_TOKEN_FAIL =
  'AUTH/VALIDATE_RESET_PASSWORD_TOKEN_FAIL';

export const RESET_PASSWORD = 'AUTH/RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'AUTH/RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'AUTH/RESET_PASSWORD_FAIL';

export const UPDATE_USER = 'AUTH/UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'AUTH/UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'AUTH/UPDATE_USER_FAIL';

export const GET_USER = 'AUTH/GET_USER';
export const GET_USER_SUCCESS = 'AUTH/GET_USER_SUCCESS';
export const GET_USER_FAIL = 'AUTH/GET_USER_FAIL';

export const INVITE = 'AUTH/INVITE';
export const INVITE_SUCCESS = 'AUTH/INVITE_SUCCESS';
export const INVITE_FAIL = 'AUTH/INVITE_FAIL';

export const GET_ORGANIZATION = 'AUTH/GET_ORGANIZATION';
export const GET_ORGANIZATION_SUCCESS = 'AUTH/GET_ORGANIZATION_SUCCESS';
export const GET_ORGANIZATION_FAILURE = 'AUTH/GET_ORGANIZATION_FAILURE';

export const UPDATE_ORGANIZATION = 'AUTH/UPDATE_ORGANIZATION';
export const UPDATE_ORGANIZATION_SUCCESS = 'AUTH/UPDATE_ORGANIZATION_SUCCESS';
export const UPDATE_ORGANIZATION_FAILURE = 'AUTH/UPDATE_ORGANIZATION_FAILURE';

/**
 * Login action
 * @param {object} credentials the user's credentials
 * @param {string} credentials.username the username of the account
 * @param {string} credentials.password the password for the account
 */
const login = credentials => {
  return {
    type: LOGIN,
    credentials,
  };
};

/**
 * Login success action
 * @param {object} user the response object
 */
const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

/**
 * Login fail action
 * @param {object} error the response object
 */
const loginFail = error => {
  return {
    type: LOGIN_SUCCESS,
    error,
  };
};

/**
 * Logout action
 */
const logout = () => ({ type: LOGOUT });

/**
 * Logout success action
 */
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

/**
 * Logout fail action
 */
const logoutFail = () => ({ type: LOGOUT_FAIL });

/**
 * Register action
 * @param {object} data the form data
 * @param {string} data.username the username of the account
 * @param {string} data.password the password for the account
 * @param {string} data.email the email of the user
 * @param {string} data.first_name the first name of the user
 * @param {string} data.last_name the last name of the user
 * @param {string} data.organization_name the name of the user's organization
 */
const register = data => ({ type: REGISTER, data });

/**
 * Register success action
 * @param {object} user the response object
 */
const registerSuccess = user => ({ type: REGISTER, user });

/**
 * Register fail action
 * @param {object} error the response object
 */
const registerFail = error => ({ type: LOGOUT_FAIL, error });

/**
 * Send password reset link action
 * @param {object} data the form data
 * @param {string} data.email the email of the user
 */
const sendPasswordResetLink = data => ({
  type: SEND_PASSWORD_RESET_LINK,
  data,
});

/**
 * Validate reset password token action
 * @param {{ uid, token }} data
 * @param {*} history
 */
const validateResetPasswordToken = data => ({
  type: VALIDATE_RESET_PASSWORD_TOKEN,
  data,
});

/**
 * Reset password action
 * @param {{ new_password1, new_password2, uid, token }} data
 */
const resetPassword = data => ({
  type: RESET_PASSWORD,
  data,
});

/**
 * Update user action
 * @param {{ first_name, last_name }} data
 */
const updateUser = data => ({ type: UPDATE_USER, data });

/**
 * Get user action
 */
const getUser = () => ({ type: GET_USER });

/**
 * Invite user action
 * @param {{ email }} data
 */
const invite = data => ({ type: INVITE, data });

/**
 * Get organization action
 * @param {string} uuid
 */
const getOrganization = uuid => ({
  type: GET_ORGANIZATION,
  uuid,
});

/**
 * Update organization action
 * @param {string} uuid
 */
const updateOrganization = uuid => ({
  type: UPDATE_ORGANIZATION,
  uuid,
});

export default {
  login,
  loginSuccess,
  loginFail,
  logout,
  logoutSuccess,
  logoutFail,
  register,
  registerSuccess,
  registerFail,
  sendPasswordResetLink,
  validateResetPasswordToken,
  resetPassword,
  updateUser,
  getUser,
  invite,
  getOrganization,
  updateOrganization,
};
