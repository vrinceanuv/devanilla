export const retrieveElement = (element) => {
  if (typeof element === 'string') {
    return document.querySelector(element);
  }

  return element;
};
