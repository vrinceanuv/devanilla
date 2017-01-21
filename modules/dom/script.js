(function () {

  var dom;

  function creatElement (element) {
    return document.creatElement(element);
  }

  function appendElement (element, elementToAppend) {
    return elementToAppend.appendChild(element);
  }

  function removeElement (element) {

  }

  function addClass (className, element) {

  }

  function removeClass (className, element) {

  }

  function addAttribute (attributeName, attributeValue, element) {

  }

  function removeAttribute (attributeName, element) {

  }

  dom = {
    creatElement: creatElement,
    appendElement: appendElement,
    removeElement: removeElement,
    addClass: addClass,
    removeClass: removeClass,
    addAttribute: addAttribute,
    removeAttribute: removeAttribute
  };

  return dom;
});
