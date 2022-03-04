/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let before = list;
  let after = list.next;
  while (after.next !== null) {
    before = after;
    after = after.next;
  }
  before.next = null;
  return undefined;
}
