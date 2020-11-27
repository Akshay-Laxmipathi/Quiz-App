var readlineSync = require('readline-sync');
const chalk = require('chalk');

var questions = ["Which of these cartoons involved a cat chasing a mouse? ", "Which of these cartoons was created with the goal of promoting the consumption of fresh green veggies among children? ", "Which of these cartoons had a gang of friends who solve mysteries? ", "Which of these cartoons revolve around the capturing, training and battling of mythical creatures? ", "Which of these cartoons had a fighter jet used by the protagonists? ", "Which of these cartoons used an underwater setting? ", "Which of these cartoons involved a battle hardened warrior who is sent back in time by the antagonist? ", "Which of these cartoons allowed the manipulation of the four elements of nature by people? ", "Which of these cartoons had a reckless grandparent and an anxious grandchild? ", "Which of these cartoons revolved around a boy and his magical dog? "];

var options = [['Tom & Jerry', 'Fairly Odd Parents', 'Jimmy Neutron', 'Looney Tunes'], ['Powerpuff Girls', 'DragonBall Z', 'Popeye The Sailor', 'Dora The Explorer'], ['The Jetsons', 'Scooby Doo', 'Rugrats', 'Talespin'], ['Johnny Bravo', 'Cardcaptors', 'Phineas & Ferb', 'Pokemon'], ['Winx Club', 'Swat Kats', 'Ed, Edd & Eddy', 'Astro Boy'], ['Spongebob Squarepants', 'GI Joe', 'Duck Tales', 'Digimon'], ['Dexters Laboratory', 'The Jungle Book', 'He Man', 'Samurai Jack'], ['Aladdin', 'The Little Mermaid', 'Avatar', 'Ben 10'], ['Recess', 'Chip & Dale', 'The Smurfs', 'Rick & Morty'], ['Courage The Cowardly Dog', 'Adventure Time', 'CatDog', 'Family Guy']];

var answers = [0,2,1,3,1,0,3,2,3,1];

var score = 0;
var highScore = 0;
var highScorePlayer = "";
var newGame = true;

while (newGame) {
  var playerName = readlineSync.question(chalk.yellow("Please enter your name. "));
  console.log(chalk.yellow("Welcome ") + playerName + chalk.yellow(" to the cartoon quiz! "));

  for (var i=0; i<questions.length; i++) {
    var index = readlineSync.keyInSelect(options[i], questions[i]);
    if (index === answers[i]) {
      console.log(chalk.green("You are right! "));
      score = score + 1;
    } else {
      console.log(chalk.red("You are wrong!"));
    }
  }
  console.log(chalk.blue("Your score is: ") + score);
  if (score >= highScore) {
    highScore = score;
    highScorePlayer = playerName;
    console.log(chalk.blue("Congratulations! ") + playerName + chalk.blue(" has the high score of ") + score);
  } else {
    console.log(highScorePlayer + chalk.blue(" has the high score of ") + highScore);
  }
  score = 0;
  newGame = readlineSync.keyInYN(chalk.yellow("Would you like to play another game? "));
}
