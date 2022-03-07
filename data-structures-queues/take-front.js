/* exported takeFront */

function takeFront(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const item = queue.dequeue();
    return item;
  }
}
