addActive = (elem) ->
  console.log option[elem]
  option[elem].classList.add "active"
  
  # option[elem].classList.remove("container");
  #Recursion to add active class to all containers
  addActive elem + 1  if option[elem + 1] isnt `undefined`
  return
option = document.getElementsByClassName("container")
i = 0

while i < option.length
  
  #Closure to track index of container
  ((index) ->
    option[index].addEventListener "click", ->
      addActive index
      return

    return
  ) i
  i++