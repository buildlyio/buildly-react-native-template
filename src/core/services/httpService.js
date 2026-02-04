import axios from "axios";
import oauthService from "./oauthService";

/**
 * Centralized error handling for API responses
 * @param {object} error - Axios error object
 * @throws {Error} - Formatted error message
 */
function handleError(error) {
  if (!axios.isAxiosError(error)) {
    throw new Error(error?.message || "An unknown error occurred.");
  }

  const { response } = error;

  if (response) {
    const { status, data } = response;
    const errorMessage = data?.detail || data?.message || "An error occurred.";

    console.log(`API Error [${status}]:`, errorMessage);

    switch (status) {
      case 400:
        throw new Error(errorMessage || "Invalid request.");
      case 401:
        throw new Error("Unauthorized. Please log in again.");
      case 403:
        throw new Error("Forbidden. You don’t have permission to access this.");
      case 404:
        throw new Error("Resource not found.");
      case 500:
        throw new Error("Server error. Please try again later.");
      default:
        throw new Error(errorMessage);
    }
  } else if (error.request) {
    console.log("Network Error:", error.message);
    throw new Error("Network error. Please check your connection.");
  } else {
    throw new Error(error.message || "Unexpected error occurred.");
  }
}

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
  try {
    let token;
    let tokenType;
    // if (useJwt) {
    //   tokenType = 'JWT';
    //   token = await oauthService.getJwtToken();
    // } else {
    tokenType = "Bearer";
    token = await oauthService.getAccessToken();
    // }
    const headers = {
      ...(token && { Authorization: `${tokenType} ${token}` }),
      "Content-Type": contentType || "application/json",
    };
    const options = {
      url,
      method,
      data: body,
      headers,
      responseType: responseType || null,
    };

    const response = await axios(options);
    return response;
  } catch (error) {
    handleError(error);
  }
}
/**
 * Service for handling http requests
 */
export default {
  makeRequest,
};
