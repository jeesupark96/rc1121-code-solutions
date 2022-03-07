/* exported getTop */

function getTop(stack) {
  if (!stack.print()) {
    return undefined;
  } else stack.peek();
  return stack.peek();
}
