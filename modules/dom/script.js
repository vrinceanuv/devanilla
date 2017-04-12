import { retrieveElement } from '../utils/script.js'

/**
 * Creates an element
 * @param  {string} element
 */

export const addElement = ( element ) => document.createElement( element )

/**
 * Removes an element from DOM
 * @param  {string} element
 */

export const removeElement = ( element ) => {
  let childNode = retrieveElement( element );

  element.parentNode.removeChild( childNode );
}

/**
 * Adds an element inside another element as last child
 * @param  {node} element
 * @param  {node} parent
 */

export const append = ( element, parent ) => {
  let parentNode = retrieveElement( parent ),
      childNode = retrieveElement( element );

  return parentNode.appendChild( childNode )
}

/**
 * Adds an element inside another element as first child
 * @param  {node} element
 * @param  {node} parent
 */

export const prepend = ( element, parent ) => {
  let parentNode = retrieveElement( parent ),
      childNode = retrieveElement( element );

  parentNode.insertBefore( childNode, parentNode.firstChild );
}

/**
 * Adds a class to an element
 * @param  {string} className
 * @param  {node} element
 */

export const addClass = ( className, element ) => {
  // TODO: done late night, to be tested
  let elementToChange = retrieveElement( element );

  if ( element.classList ) {
    return element.classList.add( className );
  } else {
    return element.className += ' ' + className;
  }
}

/**
 * Removes a class from an element
 * @param  {string} className
 * @param  {node} element
 */

export const removeClass = ( className, element ) => {
  // TODO: done late night, to be tested
  let elementToChange = retrieveElement( element );

  if (elementToChange.classList) {
    return elementToChange.classList.remove( className );
  } else {
    return elementToChange.className = elementToChange.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

/**
 * Adds an attribute or more attributes to an element
 * @param  {object} attributes
 * @param  {node} element
 */

export const addAttribute = ( element, attributes ) => {
  let elementToChange = retrieveElement( element );

  return attributes.map( function( attr ) {
    return elementToChange.setAttribute( attr.name, attr.value )
  } )
}

/**
 * Removes an attribute from element
 * @param  {string} attributeName
 * @param  {node} element
 */

export const removeAttribute = ( attributeName, element ) => {
  let elementToChange = retrieveElement( element );

  element.removeAttribute( attributeName );
}
