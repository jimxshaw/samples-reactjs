// Action Creator that returns an object. The object is the actual 
// action that will eventually be dispatch to all our reducers.
export function selectBook(book) {
  // An action needs a type and a payload properties. The type 
  // describes the purpose of the action. The payload clarifies 
  // the conditions of the action that's being triggered. Note that 
  // payloads can be optional.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}






























