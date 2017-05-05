import * as dom from './dom/script';
import * as events from './events/script';
import * as ajax from './ajax/script';

export const addElement = dom.addElement;
export const removeElement = dom.removeElement;
export const append = dom.append;
export const prepend = dom.prepend;
export const addClass = dom.addClass;
export const removeClass = dom.removeClass;
export const addAttribute = dom.addAttribute;
export const removeAttribute = dom.removeAttribute;
export const addEvent = events.addEvent;
export const removeEvent = events.removeEvent;
export const get = ajax.get;
export const post = ajax.post;
