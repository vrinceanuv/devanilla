import dom from './dom/script'
import events from './events/script'

//exporting dom modules
export const addElement = dom.addElement;
export const removeElement = dom.removeElement;
export const append = dom.append;
export const prepend = dom.prepend;
export const addClass = dom.addClass;
export const removeClass = dom.removeClass;
export const addAttribute = dom.addAttribute;
export const removeAttribute = dom.removeAttribute;

//exporting events
export const addEvent = events.addEvent;
export const removeEvent = events.removeEvent;
