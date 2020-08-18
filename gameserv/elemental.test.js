const {validate, config, initialize} = require('./game');
const {isValidLineData} = require('./utils');
const {parseJSON} = require('../utils');

const basicurl = 'http://127.0.0.1:2004/v2/games/936207324/';

test('config', async () => {
  const ret = await config(basicurl);

  isValidLineData(ret.linedata, 25, 5, 3);
});

test('initialize', async () => {
  const ret = await initialize(basicurl);

  expect(typeof ret.playerStatePublic).toEqual('string');
  expect(typeof ret.playerStatePrivate).toEqual('string');

  const pspb = parseJSON(ret.playerStatePublic);
  const pspv = parseJSON(ret.playerStatePrivate);

  expect(pspb !== undefined).toEqual(true);
  expect(pspv !== undefined).toEqual(true);

  expect(pspb.gametimers).toEqual(0);

  expect(pspv.totalbets).toEqual(0);
  expect(pspv.totalwins).toEqual(0);
  expect(pspv.totalfgtimes).toEqual(0);
  expect(pspv.totalfgwin).toEqual(0);
});

test('validate', async () => {
  const ret = await validate(basicurl, {}, {}, {}, 'SPIN');
  console.log(ret);
});
