//set up player's stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//set up enemy stats
var enemyHealth = 50;
var enemyAttack = 12;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

//Game States
//"WIN" - P;ayer robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
//"LOSE" - Player robot's heath is zero or less

//function for one round of fight
var fight = function(enemyName) {

  // repeat while enemy robot is still alive
  while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT") {

      //player attack
      enemyHealth = enemyHealth - playerAttack;

      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      //enemy attack
      playerHealth = playerHealth - enemyAttack;

      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    } else if (promptFight === "skip" || promptFight === "SKIP") {

      var confirmSkip = window.confirm("Are you sure you'd like to quit");

      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");

        playerMoney = playerMoney - 10;
        break;
      } else {
        fight();
      }
    } else {
      window.alert("You need to pick a valid option. Try again!");
    }
  }
}

for(var i = 0; 1 < enemyNames.length; i++) {
  if (playerHealth > 0){
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(enemyNames[i]);
  } else {
    window.alert("You have lost your robot in battle! Game Over");
    break;
  }

}