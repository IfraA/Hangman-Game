# Hangman-Game
Hangman Game- This was a challenging assignment which required lots of research and learning new methods. Existing codes and online resources came in handy.

Steps:
User presses a key to start.
Computer chooses a random word and then adds the appropriate number of underscores(learnt the .split method here to separate the choosen word into number of sub-strings).
Each correct alphabet is placed on the relevant underscore mark ( this is where I learnt the .indexOf and .push method. If the user's guess is correct, then it can move into the for loop which then places the correct alphabet into the appropriate blank.)
Each wrong guessed alphabet is added to the 'Wrong Guess' array and reduces the number Guesses left.
After the user wins or loses, the game is reset and started again ( here the .splice method is used to remove/add items from the alphabet array.) 
**The restart step was a challenge and needed some help to be completed. 
