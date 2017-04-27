/**
 * Does an ajax get
 * @param  {string} url - The url for the ajax call
 * @param  {function} callback - The callback after the call is done
 */
export const get = (url) => {
  /* eslint-disable */
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();

    request.open('GET', url, true);

    request.onload = function() {
      if (request.status === 200 && request.status < 400) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('Network Error'));
    };

    request.send();
  });
  /* eslint-enable */
};

/**
 * Does an ajax post
 * @param  {string} url - The url for the ajax call
 * @param  {function} callback - The callback after the call is done
 * @param  {object} data - The data that we send
 * @param  {string} headers - Optional headers that we send
 */
export const post = (url, data, headers) => {
  /* eslint-disable */
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();

    request.open('POST', url, true);

    if (headers) {
      request.setRequestHeader(headers);
    } else {
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }

    request.onload = function() {
      if (request.status === 200 && request.status < 400) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('Network Error'));
    };

    request.send();
  });
  /* eslint-enable */
};
