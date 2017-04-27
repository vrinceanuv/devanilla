/**
 * Does an ajax getRequest
 * @param  {string} url - The url for the ajax call
 * @param  {function} callback - The callback after the call is done
 */
export const getRequest = (url, callback) => {
  const request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      callback(JSON.parse(request.responseText));
    } else {
      callback(request.status);
    }
  };

  request.onerror = function() {
    callback(request.status);
  };

  request.send();
};

/**
 * Does an ajax postRequest
 * @param  {string} url - The url for the ajax call
 * @param  {function} callback - The callback after the call is done
 * @param  {object} data - The data that we send
 * @param  {string} headers - Optional headers that we send
 */
export const postRequest = (url, callback, data, headers) => {
  const request = new XMLHttpRequest();

  request.open('POST', url, true);

  if(headers) {
    request.setRequestHeader(headers);
  } else {
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  request.onload = function() {
    callback(request.status);
  };

  request.onerror = function() {
    callback(request.status);
  };

};
