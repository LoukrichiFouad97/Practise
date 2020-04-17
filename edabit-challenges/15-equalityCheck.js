const checkEquality = (a, b) => {
	const aType = typeof a;
	const bType = typeof b;
	if (aType === bType) {
		return true;
	} else {
		return false;
	}
};

console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));
