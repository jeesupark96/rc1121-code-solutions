/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return undefined;
  } else {
    list.next.data = value;
  }

}
