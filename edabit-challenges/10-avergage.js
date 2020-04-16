// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

const avg = (numbers) => {
	let sum = 0;
	// numbers.forEach((num) => {
	// 	sum += num;
	// });
	// for (let num = 0; num < numbers.length; num++) {
	// 	sum += numbers[num];
	// }
	for (const num of numbers) {
		sum += num;
	}

	return sum / numbers.length;
}
console.log(avg([0, 50]));
console.log(avg([75, 76, 80, 95, 100]));
