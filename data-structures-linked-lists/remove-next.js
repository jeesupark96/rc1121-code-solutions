/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return undefined;
  }
  list.next = list.next.next;

}
