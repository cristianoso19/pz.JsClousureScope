/*
 *function moneyBox(coins) {
 *   let saveCoins = 0;
 *   saveCoins += coins;
 *   console.log(`MoneyBox: ${saveCoins}`);
 *}
 *
 *moneyBox(5);
 *moneyBox(5);
 */

function moneyBox() {
	let saveCoins = 0;
	function countCoins(coins){
		saveCoins += coins;
		console.log(`MoneyBox: $${saveCoins}`)
	}
	return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(5);

const moneyBoxAna = moneyBox();
moneyBoxAna(2);
moneyBoxAna(19);
moneyBoxAna(19);

function createPetList() {
  let petNames = [];
  return function myPetList(petName) {
    if (petName) {
      return petNames.push(petName);
    } else{
		return petNames;
	 } 
  }
}

myPetList("michi");

myPetList("firulais");

myPetList();

