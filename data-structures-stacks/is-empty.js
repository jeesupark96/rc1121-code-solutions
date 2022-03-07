/* exported isEmpty */

function isEmpty(stack) {
  const NewStack = stack;
  if (NewStack.peek() === undefined) {
    return true;
  } else return false;

}
