// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

const getRandom = (arr) => {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
};

const getCard = () => {
	const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
	const suits = ["clubs", "spades", "hearts", "diamonds"];

	return {
		value: getRandom(values),
		suit: getRandom(suits),
	};
};

console.log(getCard());
