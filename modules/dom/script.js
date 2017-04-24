import { retrieveElement } from '../utils/script';

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
  const childNode = retrieveElement(element);

  element.parentNode.removeChild(childNode);
};

/**
 * Adds an element inside another element as last child
 * @param  {node} element
 * @param  {node} parent
 */

export const append = (element, parent) => {
  const parentNode = retrieveElement(parent);
  const childNode = retrieveElement(element);

  return parentNode.appendChild(childNode);
};

/**
 * Adds an element inside another element as first child
 * @param  {node} element
 * @param  {node} parent
 */

export const prepend = (element, parent) => {
  const parentNode = retrieveElement(parent);
  const childNode = retrieveElement(element);

  parentNode.insertBefore(childNode, parentNode.firstChild);
};

/**
 * Adds a class to an element
 * @param  {string} className
 * @param  {node} element
 */

export const addClass = (className, element) => {
  // TODO: done late night, to be tested
  const elementToChange = retrieveElement(element);

  if (elementToChange.classList) {
    return elementToChange.classList.add(className);
  }

  elementToChange.className += ` ${className}`;

  return elementToChange;
};

/**
 * Removes a class from an element
 * @param  {string} className
 * @param  {node} element
 */

export const removeClass = (className, element) => {
  // TODO: done late night, to be tested
  const elementToChange = retrieveElement(element);

  if (elementToChange.classList) {
    return elementToChange.classList.remove(className);
  }

  // eslint-disable-next-line
  return elementToChange.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

/**
 * Adds an attribute or more attributes to an element
 * @param  {object} attributes
 * @param  {node} element
 */

export const addAttribute = (element, attributes) => {
  const elementToChange = retrieveElement(element);

  return attributes.map(attr => elementToChange.setAttribute(attr.name, attr.value));
};

/**
 * Removes an attribute from element
 * @param  {string} attributeName
 * @param  {node} element
 */

export const removeAttribute = (attributeName, element) => {
  const elementToChange = retrieveElement(element);

  elementToChange.removeAttribute(attributeName);
};
