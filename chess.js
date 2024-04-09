// a1 => g8
// e4 => d5

function findOppositeChessSquare(square) {
  const letters = "abcdefgh";
  const numbers = "12345678";
  const rows = 8;

  if (square.length !== 2) {
    return "invalid square";
  }

  const [letter, number] = square.split("");

  const invalidLetter = !letters.includes(letter);
  const invalidNum = !numbers.includes(number);

  if (invalidLetter || invalidNum) {
    return "invalid square";
  }

  const letterIndex = letters.indexOf(letter);
  const numberIndex = numbers.indexOf(number);

  return [
    letters[rows - letterIndex - 1],
    numbers[rows - numberIndex - 1],
  ].join("");
}

console.log(findOppositeChessSquare("a1"));
