/**
 * In this exercise you will have to:

  -Take a list of names.
  -Add "Hello" to every name.
  -Make one big string with all greetings.
  -The solution should be one string with a comma in between every "Hello (Name)".
  
  Examples
  greetPeople(["Joe"]) ➞ "Hello Joe"
  greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"
  greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"

 */

function greetPeople(names) {
	return names.map((name) => `Hello ${name}`).join(", ");
}

console.log(greetPeople(["Fouad", "Mohamed", "Loukrichi"]));
