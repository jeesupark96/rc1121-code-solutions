/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined);
  else {
    queue.enqueue(queue.dequeue());
  }
}
