/**
 * Parse a string as html
 * @param  {string} string
 */

export const parseHTML = (string) => {
  let temp = document.implementation.createHTMLDocument();

  if (typeof string !== 'string') {
    return string;
  }

  temp.body.innerHTML = string;

  return temp.body.children;
}
