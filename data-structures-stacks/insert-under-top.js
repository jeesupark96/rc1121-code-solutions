/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const newStack = stack;

  if (newStack.peek() === undefined) {
    return undefined;
  } else {
    const popvalue = newStack.pop();
    newStack.push(value);
    newStack.push(popvalue);
  }
  return newStack;
}
