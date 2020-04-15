/*I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.
Your job is to help me by creating a function that takes in a string and checks to see if it contains the following words or phrases:
"anime"
"meme"
"vine"
"roasts"
"Danny DeVito"
If it does, return "NO!". Otherwise, return "Safe watching!".
*/
const preventDistractions = (word) => {
	const distractingWords = ["anime", "meme", "vine", "roasts", "Danny DeVito"];
	if (
		word.includes("anime") ||
		word.includes("vine") ||
		word.includes("meme") ||
		word.includes("Danny DeVito") ||
		word.includes("roasts")
	) {
		console.log("NO!");
	} else {
		console.log("Safe watching!");
	}
};

preventDistractions("vines that butter my eggroll");
preventDistractions("Hot pictures of Danny DeVito");
preventDistractions("How to ace BC Calculus in 5 Easy Steps");
