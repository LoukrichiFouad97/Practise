/**
 * Create an array styles with items “Jazz” and “Blues”.
 * Append “Rock-n-Roll” to the end.
 * Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
 * Strip off the first value of the array and show it.
 * Prepend Rap and Reggae to the array.
 */

// const styles = ["Jazz", "Bleus"];
// styles.push("Rock-n-Roll");
// styles[Math.ceil(styles.length -1 / 2)] = 'Classics'
// console.log(styles.shift());
// styles.unshift("Rap", "Reggae");

/* TASK 2 
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.

*/

function sumInput() {
	const numbers = [];
	const askUser = parseInt(prompt("Enter Number? "));

	// if (typeof askUser !== "number" || askUser === "") {
	// 	return;
  // }
  // numbers.push(askUser);
  
	while (true) {
		if (askUser === null || askUser === "" || !isFinite(askUser)) {
			break;
		}
    numbers.push(askUser);
	}


	let sum = 0;
	for (const i of numbers) {
		sum += i;
	}
	console.log(sum);
}

console.log(sumInput());
