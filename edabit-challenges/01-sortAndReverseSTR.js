const  challange = (str) => {
	const arr = Array.from(str);
	const sortedArr = arr.sort().join("");
	const reversedString = arr.sort().reverse().join("");
	return [sortedArr, reversedString];
}
console.log(challange("fouad"));
console.log(challange("mohamed"));
console.log(challange("foloukrichiuad"));
