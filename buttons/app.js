// var ham = document.querySelectorAll(".hamburger");
// for (const iterator of ham) {
//   iterator.addEventListener("click", function() {
// 		this.classList.toggle("is-active");
// 	});
// }

var btn = document.getElementById("btn");
var nav = document.getElementById("nav");
var menu = document.getElementById("menu-bg");

btn.addEventListener("click", function() {
	this.classList.toggle("active");
	nav.classList.toggle("active");
	menu.classList.toggle("active");
});
