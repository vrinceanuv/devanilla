export const addClasses = (classes, elementToChange) => {
  classes.map( className => {
    if (elementToChange.classList) {
      return elementToChange.classList.add(className);
    } else {
      elementToChange.className += ` ${className}`;

      return elementToChange;
    }
  });
}

export const removeClasses = (classes, elementToChange) => {
  classes.map( className => {
    if (elementToChange.classList) {
      return elementToChange.classList.remove(className);
    } else {
      // eslint-disable-next-line
      return elementToChange.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  });
}
