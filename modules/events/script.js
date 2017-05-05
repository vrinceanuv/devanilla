import {find} from '../dom/script';

/**
 * Adds an event to an element or to some elements
 * @param  {string} eventType - The event type
 * @param  {string} element - The element(s) to attach the events
 * @param  {function} callback - The callback to execute when the event is fired
 */

export const addEvent = (eventType, elementSelector, callback) => {
  const elements = find(elementSelector);

  if (elements.length > 1) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(eventType, callback)
    }
  } else {
    elements.addEventListener(eventType, callback);
  }
};

/**
 * Removes an event to an element or to some elements
 * @param  {string} eventType - The event type
 * @param  {string} element - The element(s) to attach the events
 * @param  {function} callback - The callback that was executed when the event was fired
 */

export const removeEvent = (eventType, elementSelector, callback) => {
  const elements = find(elementSelector);

  if (elements.length > 1) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener(eventType, callback)
    }
  } else {
    elements.addEventListener(eventType, callback);
  }
};
