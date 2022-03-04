/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newlist = list.next;
  list.next = new LinkedList(value);
  if (newlist !== null) {
    list.next.next = newlist;
  }
  return undefined;
}
