/* exported takeTop */

function takeTop(stack) {
  if (!stack.print()) {
    return undefined;
  } else stack.peek();
  return stack.pop(stack.peek());

}
