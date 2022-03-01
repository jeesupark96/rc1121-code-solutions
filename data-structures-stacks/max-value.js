/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let num = stack.pop();
    while (stack.peek() !== undefined) {
      const New = stack.pop();
      if (New > num) {
        num = New;
      }
    }
    return (num);
  }
}
