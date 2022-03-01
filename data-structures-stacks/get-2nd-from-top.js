/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const newStack = stack;
  if (newStack.peek() === undefined) {
    return undefined;
  } else {
    const newitem = newStack.pop();
    const returnitem = newStack.pop();
    if (returnitem === undefined) {
      newStack.push(newitem);
    } else {
      newStack.push(returnitem);
      newStack.push(newitem);
    }
    return returnitem;
  }

}
