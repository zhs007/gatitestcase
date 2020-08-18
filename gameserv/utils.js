/**
 * isValidLineData -
 * @param {Array} linedata - linedata
 * @param {int} lines - lines
 * @param {int} w - width
 * @param {int} h - height
 */
function isValidLineData(linedata, lines, w, h) {
  expect(Array.isArray(linedata)).toEqual(true);
  expect(linedata.length).toEqual(lines);

  for (let i = 0; i < lines; ++i) {
    expect(Array.isArray(linedata[i])).toEqual(true);
    expect(linedata[i].length).toEqual(w);

    for (let x = 0; x < w; ++x) {
      expect(linedata[i][x] >= 0 && linedata[i][x] < h).toEqual(true);
    }
  }
}

exports.isValidLineData = isValidLineData;
