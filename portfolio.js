window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const selection = document.querySelectorAll(".bar");

const inAbout = document.querySelectorAll(".paragraph");

const selection0 = [selection[1], selection[2], selection[3], selection[4]];

const selection1 = [selection[0], selection[2], selection[3], selection[4]];

const selection2 = [selection[0], selection[1], selection[3], selection[4]];

const selection3 = [selection[0], selection[1], selection[2], selection[4]];

const selection4 = [selection[0], selection[1], selection[2], selection[3]];

for (let i = 0; i < selection.length; i++) {
  selection[i].addEventListener("click", activeClass);
  function activeClass() {
    if (i === 0) {
      selection[0].classList.add("active");
      loopZero();
    } else if (i === 1) {
      selection[1].classList.add("active");
      loopTwo();
      pageTransitionIn();
    } else if (i === 2) {
      selection[2].classList.add("active");
      loopThree();
    } else if (i === 3) {
      selection[3].classList.add("active");
      loopFour();
    } else if (i === 4) {
      selection[4].classList.add("active");
      loopFive();
    }
  }
}

function loopZero() {
  selection0.forEach((box) => {
    box.classList.remove("active");
  });
}
function loopTwo() {
  selection1.forEach((box) => {
    box.classList.remove("active");
  });
}
function loopThree() {
  selection2.forEach((box) => {
    box.classList.remove("active");
  });
}
function loopFour() {
  selection3.forEach((box) => {
    box.classList.remove("active");
  });
}
function loopFive() {
  selection4.forEach((box) => {
    box.classList.remove("active");
  });
}

function pageTransitionIn() {
  inAbout.forEach((box) => {
    box.classList.add("active");
  });
  setTimeout(pageTransitionOut, 3000)
}

function pageTransitionOut(){
    inAbout.forEach((box) => {
    box.classList.remove("active");
  });
}

// get a function that detects scroll position