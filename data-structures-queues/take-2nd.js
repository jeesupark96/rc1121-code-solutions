/* exported take2nd */

function take2nd(queue) {
  const newQ = queue;
  if (newQ.peek() === undefined) {
    return undefined;
  } else {
    const newitem = newQ.dequeue();
    const returnitem = newQ.dequeue();
    if (returnitem === undefined) {
      newQ.enqueue(newitem);
      return newitem;
    } else {
      newQ.enqueue(newitem);
    }
    return returnitem;
  }
}
