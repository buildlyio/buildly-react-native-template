import axios from 'axios';
import oauthService from './oauthService';

/**
 * A function to make a http request
 * @param {string} method the method (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, CONNECT, TRACE)
 * @param {string} url the endpoint path
 * @param {any} body data to send with the request
 * @param {boolean} useJwt whether or not to use JWT
 * @param {string} contentType type of content to be requested
 * @param {string} responseType the expected response type from the server
 * @returns request response or error
 */
async function makeRequest(
  method,
  url,
  body,
  useJwt,
  contentType,
  responseType,
) {
  let token;
  let tokenType;
  if (useJwt) {
    tokenType = 'JWT';
    token = await oauthService.getJwtToken();
  } else {
    tokenType = 'Bearer';
    // TODO: use access token once backend data binding is resolved
    // token = await oauthService.getAccessToken();
    token = await oauthService.getJwtToken();
  }
  const headers = {
    ...(token && { Authorization: `${tokenType} ${token}` }),
    'Content-Type': contentType || 'application/json',
  };
  const options = {
    url,
    method,
    data: body,
    headers,
    responseType: responseType || null,
  };
  return axios(options);
}

/**
 * Service for handling http requests
 */
export default {
  makeRequest,
};
