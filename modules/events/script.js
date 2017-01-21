(function () {

  function addEvent (eventType, element, callback) {
    if (element.length > 1) {
      for (var i = 0; i < element.length; i++) {
        element[i].addEventListener(eventType, callback);
      }
    } else {
      element.addEventListener(eventType, callback);
    }
  }

  function removeEvent (eventType, element) {

  }

  events = {
    addEvent: addEvent,
    removeEvent: removeEvent
  };

  return events;
});
