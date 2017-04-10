const checkElement = (element) => {
  if (typeof element === string) {
    return document.querySelector(element);
  }

  return element;
}
