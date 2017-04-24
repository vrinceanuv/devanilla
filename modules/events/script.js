/**
 * Adds an event to an element or to some elements
 * @param  {string} eventType - The event type
 * @param  {string} element - The element(s) to attach the events
 * @param  {function} callback - The callback to execute when the event is fired
 */

export const addEvent = (eventType, element, callback) => {
  if (element.length > 1) {
    element.map(elem => elem.addEventListener(eventType, callback));
  } else {
    element.addEventListener(eventType, callback);
  }
};

/**
 * Removes an event to an element or to some elements
 * @param  {string} eventType - The event type
 * @param  {string} element - The element(s) to attach the events
 * @param  {function} callback - The callback that was executed when the event was fired
 */

export const removeEvent = (eventType, element, callback) => {
  if (element.length > 1) {
    element.map(elem => elem.removeEventListener(eventType, callback));
  } else {
    element.addEventListener(eventType, callback);
  }
};
