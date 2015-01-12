// (function() {
//   var array, option;

//   array = [1, 2, 3, 4];

//   option = document.getElementsByClassName("container");

// }).call(this);


var option = document.getElementsByClassName("container");
var heart = document.getElementById('heart');

for (var i = 0; i < option.length; i++){
	option[i].addEventListener("click", function(){
		console.log(this);
		this.classList.add("active");
	});
}


heart.addEventListener("click", function(){
	console.log('clicked');
	heart.classList.add("active");
});