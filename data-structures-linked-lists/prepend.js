/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newlist = new LinkedList(value);
  if (newlist.next === null) {
    newlist.next = list;
  }
  return (newlist);
}
