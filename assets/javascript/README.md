Hangman Game built as a class homework exercise. Took help from exxisting codes and online resources.
Steps:
User presses a key to start.
Computer chooses a random word and then adds the appropriate number of underscores(learnt the .split method here to separate the choosen word into number of sub-strings)

Each correct alphabet is placed on the relevant underscore mark ( this is where I learnt the .indexOf and .push method. If the user's guess is correct, then you can move into the for loop which then places the correct alphabet into the appropriate blank.)
Each wrong guessed alphabet is added to the 'Wrong Guess' array and takes one life.
After the user wins or loses th game is reset and started again
