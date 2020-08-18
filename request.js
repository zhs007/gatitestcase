const http = require('http');

/**
 * request
 * @param {string} url - url
 * @param {object} header - {k1:v1, k2:v2}
 * @return {Promise} promise -
 */
function request(url, header) {
  return new Promise((resolve, reject) => {
    http
        .get(url, {headers: header}, (response) => {
          let data = '';
          response.on('data', (_data) => (data += _data));
          response.on('end', () => {
            try {
              // console.log(data);

              resolve(JSON.parse(data));
            } catch (e) {
              reject(e);
            }
          });
        })
        .on('error', (err) => {
          reject(err);
        });
  });
}

exports.request = request;
