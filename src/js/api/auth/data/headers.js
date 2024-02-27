import config from "../../config.js";
import storage from "../../../utils/storage.js";

/**
 * Module for generating headers for API requests.
 * @module headers
 */

export default {
  /**
   * Generates basic headers for API requests.
   * @function basic
   * @returns {Object} - The basic headers object.
   */
  basic: function () {
    return {
      "Content-Type": "application/json",
    };
  },

  /**
   * Generates headers with authorization token and API key for API requests.
   * @function withAuthToken
   * @returns {Object} - The headers object with authorization token and API key.
   */
  withAuthToken: function () {
    const token = storage.load("token");

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": config.API_KEY,
    };
  },

  /**
   * Generates headers with authorization token but without content type for API requests.
   * @function authWithoutContent
   * @returns {Object} - The headers object with authorization token but without content type.
   */
  authWithoutContent: function () {
    const token = storage.load("token");

    return {
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": config.API_KEY,
    };
  },
};
