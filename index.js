const _ = require("lodash");
const validUrl = require("valid-url");
const uuid = require("uuid");

/**
 * Converts setTimeout to a promise
 * @param {number} [time = 5000] - The amount of time to pause for before it resolves. Default is 5000 (5 secs).
 * @returns {Promise <void>} - Returns a resolved Promise
 */
const sleep = async(time) => {
    const pause = time || 5 * 1000;
    return new Promise((resolve) => {
        setTimeout(resolve, pause);
    });
};

/**
 * Selects a random number between then converts it to seconds
 * @param {object} [options = {min:5, max:7}] - The options passed for random selection
 * @param {number} [options.min = 5] - The min value that should be selected defaults to 5
 * @param {number} [options.max = 7] - The max value the should be selected defaults to 7
 * @returns {number} - A random number converted to seconds
 */
const randomTime = (options) => {
    const defaults = _.merge({}, { min: 5, max: 7 }, options);
    return _.random(defaults.min, defaults.max) * 1000;
};

/**
 * Selects a random number from the min and max provided
 * @param {object} [options = {min:5, max:7}] - The options passed for random selection
 * @param {number} [options.min = 1] - The min value that should be selected defaults to 1
 * @param {number} [options.max = 10]  - The max value the should be selected defaults to 10
 * @returns {number} -Returns a random number
 */
const randomNumber = (options) => {
    const defaults = _.merge({}, { min: 1, max: 10 }, options);
    return _.random(defaults.min, defaults.max);
};

/**
 * Validates if the url given is valid
 * @param url {string} - The url you want validated
 * @returns {boolean} - Returns true or false on whether the url is valid
 */

const isValidUrl = (url) => {
    return validUrl.isUri(url);
};

/**
 * Generates UUID
 * @returns {string} - Returns a random
 */
const generateUUID = () => {
    return uuid();
};

/**
 * Returns a date object in the format of an epoch date
 * @returns {number} Date
 */

const epochDate = () => {
    return new Date().valueOf();
};

const prettyPrintJSON = (json) => {
    console.log(JSON.stringify(json, null, 2));
};

module.exports = {
    epochDate,
    generateUUID,
    isValidUrl,
    prettyPrintJSON,
    sleep,
    randomNumber,
    randomTime
};
