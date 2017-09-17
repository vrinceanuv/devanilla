import {parseHTML} from '../utils/script';

/**
 * Finds an element or elements and transforms the NodeList to an Array
 * @param  {string} element
 */

export const find = (elementSelector) => {
  if (typeof elementSelector === 'string') {
    return [...document.querySelectorAll(elementSelector)];
  } else {
    return elementSelector;
  }
}

/**
 * Creates an element
 * @param  {string} element
 */

export const createElement = element => document.createElement(element);

/**
 * Removes an element from DOM
 * @param  {string} element
 */

export const removeElement = (element) => {
  let childNode = find(element);

  childNode.map(child => child.parentNode.removeChild(child));
};

/**
 * Adds an element inside another element as last child (append)
 * @param  {node} element
 * @param  {node} parent
 * @param  {bool} existingElement (default: false)
 */

export const append = (element, parent, currentElement) => {
  let parentNode = find(parent);
  let childNode = element;
  const existingElement = currentElement || false;

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

  for (var parent of parentNode) {
    parent.appendChild(childNode);
  }
};

/**
 * Adds an element inside another element as first child (prepend)
 * @param  {node} element
 * @param  {node} parent
 * @param  {bool} existingElement (default: false)
 */

export const prepend = (element, parent, currentElement) => {
  let parentNode = find(parent);
  let childNode = element;
  const existingElement = currentElement || false;

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
    elementToChange.map(element => addClasses(classes, element))
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

  if (elementToChange.length > 1) {
    elementToChange.map(element => removeClasses(classes, element))
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
