/* exported getLength */

function getLength(list) {
  let count = 0;
  if (list.next === null) {
    return 1;
  }
  while (list !== null) {
    list = list.next;
    count++;
  }
  return count;
}
