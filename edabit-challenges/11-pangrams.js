// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

const isPangram = (sentence) => {
	// const pangram = "abcdefghijklmnopqrstuvwxyz";
	let lowerCase = sentence.toLowerCase();
	for (let latter of "abcdefghijklmnopqrstuvwxyz") {
		// if (lowerCase.indexOf(latter) === -1) {
		// 	return false;
    // }
    if (!lowerCase.includes(latter)) {
      return false;
    }
	}
	return true;
}


console.log(isPangram("The five boxing wizards jump quickly")); //true
console.log(isPangram("The five boxing wizards jump quick")); //false
