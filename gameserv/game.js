const {request, requestPost} = require('../request');
const {awaitWrap} = require('../utils');

/**
 * validate - validate
 * @param {string} baseurl - basic url
 * @return {Array | undefined} lst - validationErrors | undefined
 */
async function validate(baseurl) {
  const [err, ret] = await awaitWrap(requestPost(baseurl + 'validate', {}, {}));
  if (err) {
    return undefined;
  }

  return ret;
}

/**
 * play - play
 * @param {string} baseurl - basic url
 * @return {Array | undefined} lst - validationErrors | undefined
 */
async function play(baseurl) {
  const [err, ret] = await awaitWrap(requestPost(baseurl + 'play', {}, {}));
  if (err) {
    return undefined;
  }

  return ret;
}

/**
 * config - config
 * @param {string} baseurl - basic url
 * @return {Array | undefined} lst - validationErrors | undefined
 */
async function config(baseurl) {
  const [err, ret] = await awaitWrap(request(baseurl + 'config', {}));
  if (err) {
    return undefined;
  }

  return ret;
}

/**
 * initialize - initialize
 * @param {string} baseurl - basic url
 * @return {Array | undefined} lst - validationErrors | undefined
 */
async function initialize(baseurl) {
  const [err, ret] = await awaitWrap(request(baseurl + 'initialize', {}));
  if (err) {
    return undefined;
  }

  return ret;
}

/**
 * version - version
 * @param {string} baseurl - basic url
 * @return {Array | undefined} lst - validationErrors | undefined
 */
async function version(baseurl) {
  const [err, ret] = await awaitWrap(request(baseurl + 'version', {}));
  if (err) {
    return undefined;
  }

  return ret;
}

/**
 * checksum - checksum
 * @param {string} baseurl - basic url
 * @return {Array | undefined} lst - validationErrors | undefined
 */
async function checksum(baseurl) {
  const [err, ret] = await awaitWrap(requestPost(baseurl + 'checksum', {}, {}));
  if (err) {
    return undefined;
  }

  return ret;
}

/**
 * evaluate - evaluate
 * @param {string} baseurl - basic url
 * @param {string} objectiveId - objectiveId
 * @return {Array | undefined} lst - validationErrors | undefined
 */
async function evaluate(baseurl, objectiveId) {
  const [err, ret] = await awaitWrap(requestPost(baseurl + 'evaluate/' + objectiveId, {}, {}));
  if (err) {
    return undefined;
  }

  return ret;
}

exports.validate = validate;
exports.play = play;
exports.config = config;
exports.initialize = initialize;
exports.version = version;
exports.checksum = checksum;
exports.evaluate = evaluate;
