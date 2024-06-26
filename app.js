const words = ["programowanie", "komputer", "fukcja", "javascript"];

const chooseRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

const initGame = () => {
  const word = chooseRandomWord();
  let guessedWord = "_".repeat(word.length);
  let attempts = 5;
  let guessedLetters = [];

  console.log("Witaj w grze");
  console.log(`Masz ${attempts} prób`);

  return { word, guessedLetters, guessedWord, attempts };
};

const updateGuessedWord = (word, letter, guessedWord) => {
  let newGuessedWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      newGuessedWord += letter;
    } else {
      newGuessedWord += guessedWord[i];
    }
  }
  return newGuessedWord;
};

const playGame = () => {
  let { word, guessedLetters, guessedWord, attempts } = initGame();

  while (attempts > 0 && guessedWord !== word) {
    const letter = prompt("Podaj litere: ").toLowerCase();

    if (guessedLetters.includes(letter)) {
      console.log("Juz zgadles te litere Spróbuj ponownie");
      continue;
    }

    guessedLetters.push(letter);

    if (word.includes(letter)) {
      guessedWord = updateGuessedWord(word, letter, guessedWord);
      console.log(`Dobrze Słowo: ${guessedWord}`);
    } else {
      attempts--;
      console.log(`Źle pozostałe próby: ${attempts}`);
    }

    console.log(`Zgadywane litery: ${guessedLetters.join(", ")}`);
  }

  if (guessedWord === word) {
    console.log("Wygrałes");
  } else {
    console.log(`Przegrałes Słowo to: ${word}`);
  }
};

playGame();
