(function () {

  var dom;

  function addElement (element) {
    return document.creatElement(element);
  }

  function removeElement (element) {
    return element.parentNode.removeChild(element);
  }

  function append (element, parent) {
    return parent.appendChild(element);
  }

  function prepend (element, parent) {
    return parent.insertBefore(element, parent.firstChild);
  }

  function removeElement (element) {
    return element.parentNode.removeChild(element);
  }

  function addClass (className, element) {
    if (element.classList) {
      return element.classList.add(className);
    } else {
      return element.className += ' ' + className;
    }
  }

  function removeClass (className, element) {
    if (element.classList) {
      return element.classList.remove(className);
    } else {
      return element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  function addAttribute (element, attributes) {
    for (attr in attributes) {
      return element.setAttribute(attr.name, attr.value);
    }
  }

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
