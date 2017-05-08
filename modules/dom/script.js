import { parseHTML } from '../utils/script';

/**
 * Finds an element or elements
 * @param  {string} element
 */

export const find = (elementSelector) => {
  if (typeof elementSelector === 'string') {
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > 1) {
      return elements;
    }

    return elements[0];
  } else {
    return elementSelector;
  }
}

/**
 * Creates an element
 * @param  {string} element
 */

export const addElement = element => document.createElement(element);

/**
 * Removes an element from DOM
 * @param  {string} element
 */

export const removeElement = (element) => {
  let childNode = find(element);

  element.parentNode.removeChild(childNode);
};

/**
 * Adds an element inside another element as last child (append)
 * @param  {node} element
 * @param  {node} parent
 * @param  {bool} existingElement (default: false)
 */

export const append = (element, parent, existingElement) => {
  let parentNode = find(parent);
  let childNode = element;
  const existingElement = existingElement || false;

  if (existingElement) {
    childNode = find(element);
  }

  if (typeof childNode === 'string') {
    if (childNode.indexOf('<')) {
      childNode = parseHTML(element);
    } else {
      childNode = addElement(element);
    }
  }

  return parentNode.appendChild(childNode);
};

/**
 * Adds an element inside another element as first child (prepend)
 * @param  {node} element
 * @param  {node} parent
 * @param  {bool} existingElement (default: false)
 */

export const prepend = (element, parent, existingElement) => {
  let parentNode = find(parent);
  let childNode = element;
  const existingElement = existingElement || false;

  if (existingElement) {
    childNode = find(element);
  }

  if (typeof childNode === 'string') {
    if (childNode.indexOf('<')) {
      childNode = parseHTML(element);
    } else {
      childNode = addElement(element);
    }
  }

  parentNode.insertBefore(childNode, parentNode.firstChild);
};

/**
 * Adds a class to an element
 * @param  {string} className
 * @param  {node} element
 */

export const addClass = (className, element) => {
  let elementToChange = find(element);
  const classes = className.split(' ');

  if (elementToChange.length) {
    for(let i = 0; i < elementToChange.length; i++) {
      addClasses(classes, elementToChange[i]);
    }
  } else {
    addClasses(classes, elementToChange);
  }
};

/**
 * Removes a class from an element
 * @param  {string} className
 * @param  {node} element
 */

export const removeClass = (className, element) => {
  let elementToChange = find(element);
  const classes = className.split(' ');

  if (elementToChange.length) {
    for(let i = 0; i < elementToChange.length; i++) {
      removeClasses(classes, elementToChange[i]);
    }
  } else {
    removeClasses(classes, elementToChange);
  }
};

/**
 * Adds an attribute or more attributes to an element
 * @param  {object} attributes
 * @param  {node} element
 */

export const addAttribute = (element, attributes) => {
  let elementToChange = find(element);

  if (elementToChange.length) {
    for(let i = 0; i < elementToChange.length; i++) {
      return attributes.map(attr => elementToChange[i].setAttribute(attr.name, attr.value));
    }
  } else {
    return attributes.map(attr => elementToChange.setAttribute(attr.name, attr.value));
  }
};

/**
 * Removes an attribute from element
 * @param  {string} attributeName
 * @param  {node} element
 */

export const removeAttribute = (attributeName, element) => {
  let elementToChange = find(element);

  if (elementToChange.length) {
    for(let i = 0; i < elementToChange.length; i++) {
      attributes.map(attr => elementToChange[i].removeAttribute(attributeName));
    }
  } else {
    attributes.map(attr => removeAttribute(attributeName));
  }
};

/**
 * Adds a class to an element
 * @param  {string} classes
 * @param  {node} element
 */
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

/**
 * Removes a class from an element
 * @param  {string} classes
 * @param  {node} element
 */
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
