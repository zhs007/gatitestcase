const {play, config, initialize, version, checksum, evaluate} = require('./game');

const basicurl = 'http://127.0.0.1:2004/v2/games/936207324/';

// test('validate', async () => {
//   const ret = await validate(basicurl);
//   console.log(ret);
//   //   expect(lst).toEqual(undefined);
// });

test('play', async () => {
  const ret = await play(basicurl);
  console.log(ret);
  //   expect(lst).toEqual(undefined);
});

test('config', async () => {
  const ret = await config(basicurl);
  expect(Array.isArray(ret.linedata)).toEqual(true);
  expect(ret.paytables !== undefined).toEqual(true);
  expect(ret.reels !== undefined).toEqual(true);

  console.log(ret);
});

test('initialize', async () => {
  const ret = await initialize(basicurl);
  console.log(ret);
  //   expect(lst).toEqual(undefined);
});

test('version', async () => {
  const ret = await version(basicurl);
  console.log(ret);
  //   expect(lst).toEqual(undefined);
});

test('checksum', async () => {
  const ret = await checksum(basicurl);
  console.log(ret);
  //   expect(lst).toEqual(undefined);
});

test('evaluate', async () => {
  const ret = await evaluate(basicurl, 1);
  console.log(ret);
  //   expect(lst).toEqual(undefined);
});
