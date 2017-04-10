import { elementCheck } from '../utils/script.js'

/**
 * Creates an element
 * @param  {string} element
 */

export const addElement = (element) => document.createElement(element)

/**
 * Removes an element from DOM
 * @param  {string} element
 */

export const removeElement = (element) => element.parentNode.removeChild(element)

/**
 * Adds an element inside another element as last child
 * @param  {node} element
 * @param  {node} parent
 */

export const append = (element, parent) => {
  let parentNode = document.querySelector(parent);
  return parentNode.appendChild(element)
}

/**
 * Adds an element inside another element as first child
 * @param  {node} element
 * @param  {node} parent
 */

export const prepend = (element, parent) => parent.insertBefore(element, parent.firstChild)

/**
 * Adds a class to an element
 * @param  {string} className
 * @param  {node} element
 */

export const addClass = (className, element) => {
  if (element.classList) {
    return element.classList.add(className);
  } else {
    return element.className += ' ' + className;
  }
}

/**
 * Removes a class from an element
 * @param  {string} className
 * @param  {node} element
 */

export const removeClass = (className, element) => {
  // done late night, to be tested
  let myElement = elementCheck( element );

  if (element.classList) {
    return element.classList.remove(className);
  } else {
    return element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

/**
 * Adds an attribute or more attributes to an element
 * @param  {object} attributes
 * @param  {node} element
 */

export const addAttribute = (element, attributes) => {
  return attributes.map( function(attr) {
    return element.setAttribute(attr.name, attr.value)
  } )
}

/**
 * Removes an attribute from element
 * @param  {string} attributeName
 * @param  {node} element
 */

export const removeAttribute = (attributeName, element) => element.removeAttribute(attributeName)
