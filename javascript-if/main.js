/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }

}

function isEven(number) {
  if (number % 2 > 0) {
    return false;
  } else {
    return true;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if ((person.age < 18) && (person.age < 21)) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'yakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight Everybody!';
  }
}