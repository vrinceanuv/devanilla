import { addClasses, removeClasses } from '../utils/script';

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
  const childNode = find(element);

  element.parentNode.removeChild(childNode);
};

/**
 * Adds an element inside another element as last child
 * @param  {node} element
 * @param  {node} parent
 */

export const append = (element, parent) => {
  const parentNode = find(parent);
  const childNode = find(element);

  return parentNode.appendChild(childNode);
};

/**
 * Adds an element inside another element as first child
 * @param  {node} element
 * @param  {node} parent
 */

export const prepend = (element, parent) => {
  const parentNode = find(parent);
  const childNode = find(element);

  parentNode.insertBefore(childNode, parentNode.firstChild);
};

/**
 * Adds a class to an element
 * @param  {string} className
 * @param  {node} element
 */

export const addClass = (className, element) => {
  const elementToChange = find(element);
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
  const elementToChange = find(element);
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
  const elementToChange = find(element);

  return attributes.map(attr => elementToChange.setAttribute(attr.name, attr.value));
};

/**
 * Removes an attribute from element
 * @param  {string} attributeName
 * @param  {node} element
 */

export const removeAttribute = (attributeName, element) => {
  const elementToChange = find(element);

  elementToChange.removeAttribute(attributeName);
};
