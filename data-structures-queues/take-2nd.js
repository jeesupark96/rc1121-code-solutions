/* exported take2nd */

function take2nd(queue) {

  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const newitem = queue.dequeue();
    const returnitem = queue.dequeue();
    if (returnitem === undefined) {
      queue.enqueue(newitem);
      return newitem;
    } else {
      queue.enqueue(newitem);
    }
    return returnitem;
  }
}
