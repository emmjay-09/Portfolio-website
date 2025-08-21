const selection = document.querySelectorAll("li");

for (let i = 0; i < selection.length; i++) {
  selection[i].addEventListener("click", activeClass)  
}
function activeClass(key){
    if (key === "active") {
          selection.classList.add("active");
          console.log(selection);
        } else {
          selection.classList.remove("active");
        }

}


