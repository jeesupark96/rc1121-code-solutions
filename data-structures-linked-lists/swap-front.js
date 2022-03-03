/* exported swapFront */

function swapFront(list) {

  if (list.next === null) {
    return list;
  } else {
    const sec = list.next.data;
    const first = list.data;
    list.data = sec;
    list.next.data = first;

    return list;
  }
}
