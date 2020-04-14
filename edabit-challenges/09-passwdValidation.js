// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
	// if (password.length <= 8) {
	// 	return false;
	// } else if (password.indexOf(username) !== -1) {
	// 	return false;
	// } else if (password.indexOf(" ") !== -1) {
	// 	return false;
	// } else {
	// 	return true;
	// }
	if (
		password.length <= 8 ||
		password.indexOf(username) !== -1 ||
		password.indexOf(" ") !== -1
	) {
		return false;
	} else {
		return true;
	}
}

console.log(isValidPassword("89Fjj1nms", "dogLuvr"));
console.log(isValidPassword("dogLuvr123!", "dogLuvr"));
console.log(isValidPassword("hello1", "dogLuvr"));
console.log(isValidPassword("fouad s", "fouadsdfs"));
