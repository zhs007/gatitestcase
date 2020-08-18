const {request} = require('../request');
const {awaitWrap} = require('../utils');

/**
 * genRngs - generate rngs
 * @param {string} rngurl - rngurl
 * @param {int} gameid - gameid
 * @param {int} size - size
 * @return {Array | undefined} lst - rng list | undefined
 */
async function genRngs(rngurl, gameid, size) {
  const [err, ret] = await awaitWrap(request(rngurl + '?size=' + size, {
    'X-Game-ID': gameid,
  }));

  if (err) {
    return undefined;
  }

  return ret;
}

exports.genRngs = genRngs;
