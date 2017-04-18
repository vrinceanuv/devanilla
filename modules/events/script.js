export const addEvent = ( eventType, element, callback ) => {
  if (element.length > 1) {
    element.map( (elem) => elem.addEventListener( eventType, callback ) );
  } else {
    element.addEventListener( eventType, callback );
  }
}

export const removeEvent = (eventType, element, callback) => {
  if (element.length > 1) {
    element.map( (elem) => elem.removeEventListener( eventType, callback ) );
  } else {
    element.addEventListener( eventType, callback );
  }
}
