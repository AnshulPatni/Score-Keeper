var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var h1 = document.querySelector("h1");

var p1span = document.querySelector("#p1span");
var p2span = document.querySelector("#p2span");

var reset = document.getElementById("reset");
var p1score = 0;
var p2score = 0;

p1.addEventListener("click", function(){
	p1score++;
	p1span.textContent = p1score;
	console.log("Clicked P1");
});

p2.addEventListener("click", function(){
	p2score++;
	p2span.textContent = p2score;
	console.log("Clicked P2");
});

reset.addEventListener("click", function(){
	p1score = 0;
	p2score = 0;
	p1span.textContent = p1score;
	p2span.textContent = p2score;
});