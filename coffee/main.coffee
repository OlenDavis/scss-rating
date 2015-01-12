addActive = (elem) ->
  option[elem].classList.add "active"
  
  #Remove canHover class to disable hover
  canHover.className = ""
  
  #Recursion to add active class to all containers
  addActive elem + 1  if option[elem + 1] isnt `undefined`
  noClick = false
  
  #In order to not make another rating selection, change function of addActive
  addActive = ->
    return

  return
option = document.getElementsByClassName("container")
canHover = document.getElementsByClassName("canHover")[0]
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