var option = document.getElementsByClassName("container");
var canHover = document.getElementsByClassName("canHover")[0];
var noClick = true;

function addActive(elem){
	option[elem].classList.add("active");
	//Remove canHover class to disable hover
	canHover.className="";
	//Recursion to add active class to all containers
	if (option[elem+1] !== undefined){
		addActive(elem+1);
	}
	noClick = false;
	//In order to not make another rating selection, change function of addActive
	addActive = function(){
		return;
	};
}
for (var i = 0; i < option.length; i++){
	//Closure to track index of container
		(function(index){
				option[index].addEventListener("click", function(){
					addActive(index);
				});
		})(i);
}