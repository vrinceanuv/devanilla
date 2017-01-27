(function () {

  var dom;

  /**
   * Creates an element
   * @param  {string} element
   */

  function addElement (element) {
    return document.creatElement(element);
  }

  /**
   * Removes an element from DOM
   * @param  {string} element
   */

  function removeElement (element) {
    return element.parentNode.removeChild(element);
  }

  /**
   * Adds an element inside another element as last child
   * @param  {node} element
   * @param  {node} parent
   */

  function append (element, parent) {
    return parent.appendChild(element);
  }

  /**
   * Adds an element inside another element as first child
   * @param  {node} element
   * @param  {node} parent
   */

  function prepend (element, parent) {
    return parent.insertBefore(element, parent.firstChild);
  }

  /**
   * Adds a class to an element
   * @param  {string} className
   * @param  {node} element
   */

  function addClass (className, element) {
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

  function removeClass (className, element) {
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

  function addAttribute (element, attributes) {
    for (attr in attributes) {
      return element.setAttribute(attr.name, attr.value);
    }
  }

  /**
   * Removes an attribute from element
   * @param  {string} attributeName
   * @param  {node} element
   */

  function removeAttribute (attributeName, element) {
    return element.removeAttribute(attributeName);
  }

  dom = {
    addElement: addElement,
    removeElement: removeElement,
    append: append,
    prepend: prepend,
    addClass: addClass,
    removeClass: removeClass,
    addAttribute: addAttribute,
    removeAttribute: removeAttribute
  };

  return dom;
});
