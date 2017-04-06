import { addElement, removeElement, append, prepend, addClass, removeClass, addAttribute, removeAttribute } from './dom/script'

let newElem = addElement('p'),
    parentElem = 'body';

append(newElem, parentElem)
