/* exported takeFront */

function takeFront(queue) {
  if (queue.peek() === undefined) ;
  else {
    const item = queue.dequeue();
    return item;
  }
}
