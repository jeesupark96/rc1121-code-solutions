/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const first = list;
  while (list.next) {
    list = list.next;
  }
  list.next = new LinkedList(value);
  return first;
}
