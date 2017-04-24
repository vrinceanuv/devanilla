import * as dom from './dom/script';
import * as events from './events/script';

export const dev = {
  addElement: dom.addElement,
  removeElement: dom.removeElement,
  append: dom.append,
  prepend: dom.prepend,
  addClass: dom.addClass,
  removeClass: dom.removeClass,
  addAttribute: dom.addAttribute,
  removeAttribute: dom.removeAttribute,
  addEvent: events.addEvent,
  removeEvent: events.removeEvent,
};
