var option = document.getElementsByClassName("container");
var canHover = document.getElementsByClassName("canHover")[0];

function addActive(elem){
	console.log(option[elem]);
	option[elem].classList.add("active");
	canHover.className="";
	//Recursion to add active class to all containers
	if (option[elem+1] !== undefined){
		addActive(elem+1);
	}
}

for (var i = 0; i < option.length; i++){
	//Closure to track index of container
	(function(index){
		option[index].addEventListener("click", function(){
			addActive(index);
		});
	})(i);

}