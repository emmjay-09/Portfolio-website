const selection = document.querySelectorAll("li");

for (let i = 0; i < selection.length; i++) {
  selection[i].addEventListener("click", activeClass)  
}
function activeClass(key){
selection.classList.add("active")
}


