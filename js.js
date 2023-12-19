let divs = document.querySelectorAll(".book");
let divs1 = document.querySelectorAll(".view");

nxt = document.getElementById("next");
prev = document.getElementById("previous")

nxt1 = document.getElementById("next1");
prev1 = document.getElementById("previous1")

nxt.addEventListener("click", f)
prev.addEventListener("click", f2)

nxt1.addEventListener("click", f3)
prev1.addEventListener("click", f4)

function f() {
  let lastDiv = divs[divs.length - 1];
  let parent = lastDiv.parentNode;
  parent.removeChild(lastDiv);
  parent.insertBefore(lastDiv, divs[0]);
  divs = document.querySelectorAll(".book");
}
function f2() {
  let firstDiv = divs[0];
  let parent = firstDiv.parentNode;
  parent.removeChild(firstDiv);
  parent.appendChild(firstDiv);
  divs = document.querySelectorAll(".book");
}


function f3(){
  let lastDiv = divs1[divs1.length - 1];
let parent = lastDiv.parentNode;
parent.removeChild(lastDiv);
parent.insertBefore(lastDiv, divs1[0]);
divs1 = document.querySelectorAll(".view");

}


function f4() {
  let firstDiv = divs1[0];
  let parent = firstDiv.parentNode;
  let nextButton = document.getElementById("next1");
  
  parent.removeChild(firstDiv);
  parent.insertBefore(firstDiv, nextButton);
  divs1 = document.querySelectorAll(".view");
  
}
