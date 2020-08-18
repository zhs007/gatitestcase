const http = require('http');
const {parseJSON} = require('./utils');

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
          const {statusCode} = response;

          if (statusCode !== 200) {
            reject(new Error('Request Failed. The Status Code: ' + statusCode));


            return;
          }

          let data = '';
          response.on('data', (_data) => (data += _data));
          response.on('end', () => {
            const ret = parseJSON(data);
            if (ret == undefined) {
              reject(new Error('parseJSON error.'));

              return;
            }

            resolve(ret);
          });
        })
        .on('error', (err) => {
          reject(err);
        });
  });
}

exports.request = request;
