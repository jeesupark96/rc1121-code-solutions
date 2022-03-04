/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newlist = new LinkedList(value);

  newlist.next = list;

  return (newlist);
}
