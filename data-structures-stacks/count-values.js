/* exported countValues */

function countValues(stack) {
  if (stack.peek() === undefined) {
    return 0;
  } else {
    const newArray = [];
    while (stack.peek() !== undefined) {
      const newnum = stack.pop();
      newArray.push(newnum);

    } return newArray.length;

  }

}
