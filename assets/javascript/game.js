//GLOBAL VARIABLES

var alphabets = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
//List all words in an array
var wordBank =["mazda","bmw","mercedes","fiat","honda","toyota","volkswagen","chrysler"];
//User guess
var choosenWord = "";
//alphabets in a word
var lettersInWord = [];
//number of underscores
var underscoresNum = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses =[];
//Wrong guesses-empty array for now
var wrongLetters = [];
//Counts
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var rightGuessCounter = 0;

// create function to reset. will be called out after every win or loss
function reset()
{
	//Choose word randomly from the wordBank
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Splits the choosen word into individual letters
	lettersInWord = choosenWord.split('');
	//Get the number of blanks
	underscoresNum = lettersInWord.length;
	
	//reset
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 10;
	wrongLetters =[];
	blanksAndSuccesses =[];
	alphabets = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}
//to start..similar steps as reset
function startGame()
{
	//same the reset function
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	underscoresNum = lettersInWord.length;
	
	//reset
	rightGuessCounter = 0;
	guessesLeft = 10;
	wrongLetters =[];
	blanksAndSuccesses =[];
	alphabets = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	//add letter guesses to the blanks
	for(var i = 0; i< underscoresNum; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

	//create innerHtml function for the appropriate ids displayed on the page
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
}
//create function to put the correct guessed alphabet in the right blank
function compareLetters(userKey) {
				console.log('WORKING!');
				//create conditions for correct guess
				if(choosenWord.indexOf(userKey) > -1)
				{
					//Loops depending on the amount of blanks 
					for(var i = 0; i < underscoresNum; i++)
					{
						//Fills in right index with user key
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++; blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
					//check
					console.log(blanksAndSuccesses);
				}
				//condition for wrong guess
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					//Changes HTML
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
					//Test / Debug
					console.log('Wrong Letters = ' + wrongLetters);
					console.log('Guesses left are ' + guessesLeft);
				}
			
			
		
}
//function to determine win or loss
function winLose()
{
	// When number blanks is filled with right words then you win
	if(rightGuessCounter === underscoresNum)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
		//use the reset funtion call out
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}
//-------------------
// to start the game press any key
//reset all variables to 0

startGame();

document.onkeyup = function(event)
{ console.log(event);

	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < alphabets.length; i++)
	{	
		if(letterGuessed === alphabets[i] && test === true)
		{
			var spliceDword = alphabets.splice(i,1);
			//Test / Debug
			console.log('Double word is = ' + alphabets[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}