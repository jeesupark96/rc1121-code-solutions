/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 1 * 1 = O(1)
    if (!seen[word]) {              // 1 * n = O(1n)
      seen[word] = true;
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(?)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 1 * 1 = O(1)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 2 * n = O(2n)
      c++                           // 2 * n = O(2n)
    ) {
      const comparing = words[c];   // 1 * 1 = O(1)
      if (comparing === word) {     // 1 * n = O(1n)
        isUnique = false;           // 1 * 1 = O(1)
      }
    }
    if (isUnique) {                 // 1 * n = O(1n)
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n)
