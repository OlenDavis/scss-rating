(function() {
  var addActive, i, option;

  addActive = function(elem) {
    console.log(option[elem]);
    option[elem].classList.add("active");
    if (option[elem + 1] !== undefined) {
      addActive(elem + 1);
    }
  };

  option = document.getElementsByClassName("container");

  i = 0;

  while (i < option.length) {
    (function(index) {
      option[index].addEventListener("click", function() {
        addActive(index);
      });
    })(i);
    i++;
  }

}).call(this);
