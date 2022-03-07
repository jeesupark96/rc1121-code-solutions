/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined);
  else {
    const first = queue.dequeue();
    const sec = queue.dequeue();
    if (sec === undefined) {

      return first;
    } else if (first < sec) {
      queue.enqueue(sec);
      return first;
    } else if (first === sec) {
      queue.enqueue(sec);
      return first;
    } else if (first > sec) {
      queue.enqueue(first);
      return sec;
    }

  }

}
