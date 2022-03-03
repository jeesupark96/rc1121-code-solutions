/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return queue;
  } else {
    queue.enqueue(queue.dequeue());
  }
}
