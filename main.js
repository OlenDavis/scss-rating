(function() {
  var addActive, canHover, i, option;

  addActive = function(elem) {
    var noClick;
    option[elem].classList.add("active");
    canHover.className = "";
    if (option[elem + 1] !== undefined) {
      addActive(elem + 1);
    }
    noClick = false;
    addActive = function() {};
  };

  option = document.getElementsByClassName("container");

  canHover = document.getElementsByClassName("canHover")[0];

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
