const {genRngs} = require('./rng');

const rngurl = 'http://127.0.0.1:50000/numbers';
const gameid = 936207324;

/**
 * isValidRngs - check the rng list
 * @param {Array} lst - rng list
 * @return {boolean} isok - is it valid?
 */
function isValidRngs(lst) {
  for (let i = 0; i < lst.length; ++i) {
    if (!Number.isInteger(lst[i])) {
      return false;
    }
  }

  return true;
}

test('genRngs', async () => {
  let lst = await genRngs(rngurl, gameid, -1);
  expect(lst).toEqual(undefined);

  lst = await genRngs(rngurl, -1, 1);
  expect(lst.length).toEqual(1);
  expect(isValidRngs(lst)).toEqual(true);

  lst = await genRngs('', gameid, 1);
  expect(lst).toEqual(undefined);

  lst = await genRngs(rngurl, gameid, 1);
  expect(lst.length).toEqual(1);
  expect(isValidRngs(lst)).toEqual(true);

  lst = await genRngs(rngurl, gameid, 100);
  expect(lst.length).toEqual(100);
  expect(isValidRngs(lst)).toEqual(true);

  lst = await genRngs(rngurl, gameid, 1000);
  expect(lst.length).toEqual(1000);
  expect(isValidRngs(lst)).toEqual(true);

  lst = await genRngs(rngurl, gameid, 1001);
  expect(lst.length).toEqual(1001);
  expect(isValidRngs(lst)).toEqual(true);

  lst = await genRngs(rngurl, gameid, 10001);
  expect(lst.length).toEqual(10001);
  expect(isValidRngs(lst)).toEqual(true);

  lst = await genRngs(rngurl, gameid, 100001);
  expect(lst.length).toEqual(100001);
  expect(isValidRngs(lst)).toEqual(true);
});
