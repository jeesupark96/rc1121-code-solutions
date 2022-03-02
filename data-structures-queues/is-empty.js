/* exported isEmpty */

function isEmpty(queue) {
  const NewQ = queue;
  if (NewQ.peek() === undefined) {
    return true;
  } else return false;
}
