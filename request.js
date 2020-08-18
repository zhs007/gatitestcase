const http = require('http');
const url = require('url');
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

/**
 * requestPost
 * @param {string} servURL - servURL
 * @param {object} header - {k1:v1, k2:v2}
 * @param {object} params - json object
 * @return {Promise} promise -
 */
function requestPost(servURL, header, params) {
  return new Promise((resolve, reject) => {
    const urldata = url.parse(servURL);

    let reqdata = '';
    if (params) {
      reqdata = JSON.stringify(params);
    }

    if (!header) {
      header = {};
    }

    header['Content-Type'] = 'application/json';
    header['Content-Length'] = Buffer.byteLength(reqdata);

    const req = http.request({
      hostname: urldata.hostname,
      port: urldata.port,
      path: urldata.path,
      method: 'POST',
      headers: header,
    }, (res) => {
      const {statusCode} = res;

      console.log('POST ' + servURL + ' statusCode: ' + statusCode);

      if (statusCode !== 200) {
        // reject(new Error('Request Failed. The Status Code: ' + statusCode));

        // return;
      }

      let data = '';
      res.on('data', (_data) => (data += _data));
      res.on('end', () => {
        console.log('POST ' + servURL + ' data: ' + data);

        const ret = parseJSON(data);
        if (ret == undefined) {
          reject(new Error('parseJSON error.'));

          return;
        }

        resolve(ret);
      });
    }).on('error', (err) => {
      reject(err);
    });

    req.write(reqdata);
    req.end();
  });
}

exports.request = request;
exports.requestPost = requestPost;
