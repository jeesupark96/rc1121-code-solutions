/* exported takeFront */

function takeFront(queue) {
  if (queue.peek() === undefined) {
    return queue;
  } else {
    const item = queue.dequeue();
    return item;
  }
}
