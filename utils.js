/**
 * awaitWrap - this is a wrap for await
 * @param {Promise} promise - Promise
 * @return {Array} ret - [err, data]
 */
async function awaitWrap(promise) {
  return promise
      .then((data) => [undefined, data])
      .catch((err) => [err, undefined]);
}

/**
 * parseJSON -
 * @param {string} str - json string
 * @return {Array | Object} ret - [] | {}
 */
function parseJSON(str) {
  try {
    const jobj = JSON.parse(str);

    return jobj;
  } catch (e) {
    return undefined;
  }
}

exports.awaitWrap = awaitWrap;
exports.parseJSON = parseJSON;
