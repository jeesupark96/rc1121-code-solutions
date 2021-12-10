/* exported getWords */
function getWords(string) {
  if (string === '') {
    var wordSplit = [];
  } else {
    wordSplit = string.split(' ');
    return wordSplit;
  }
  return wordSplit;
}
