// creating the lis links with js
let links = document.getElementById("links");
let AllLis= ["home", "pages", "contact us", "blog","landing"];

for (let i=0; i<AllLis.length; i++) {
  let newLi  = document.createElement("li");
  let newLink = document.createElement("a");
  newLink.href = `#${AllLis[i]}`;
  newLink.innerText = AllLis[i];
  newLi.appendChild(newLink);
  links.appendChild(newLi);
}

window.onscroll = function () {
  let nav = document.getElementById("nav");
  window.scrollY >= 10 ?
  nav.style.cssText = "backdrop-filter: blur(30px)" :
  nav.style.cssText = "backdrop-filter: blur(0px)";
}

// scroll btn

let scrollDown = document.getElementById("scroll-down");
let scrollTop  = document.getElementById("scroll-top");
let bodyHeight = document.body.scrollHeight;

scrollDown.onclick = function () {
  window.scrollTo(0,bodyHeight);
}
scrollTop.onclick = function () {
  window.scrollTo(0,0);
}

let images = Array.from(document.querySelectorAll(".photos .insta-photo"));
let currentSlid = 0; 
images[0].classList.add("active");

let bulletContainer = document.createElement("ul");
bulletContainer.className = "bullets";

let parentEle = document.querySelector(".photos");

parentEle.appendChild(bulletContainer);

// creating the slider bullets 
for (let i=0;i<images.length;i++) {
  let newLi = document.createElement("li");
  newLi.className = "bullet";
  bulletContainer.appendChild(newLi);
}

let bullets = Array.from(document.querySelectorAll(".bullets li"));
let currentBullet = currentSlid; 
bullets[0].classList.add("active");

// change the current slide by click on bullets 
bullets.forEach( function (e) {
  e.onclick = function () {
    currentSlid = bullets.indexOf(e);
    currentBullet = bullets.indexOf(e);
    checker();
  } 
});

// add active class on current element and check is it first or last
function checker() {
  images.forEach( e => e.classList.remove("active"))
  images[currentSlid].classList.add("active");
  bullets.forEach( e => e.classList.remove("active"));
  bullets[currentBullet].classList.add("active");
}

// circle shape in our laurels


let theText = "delight in every bite".toUpperCase();

let circleDiv = document.querySelector(".circle-shape");

let firstRotate = 0;
let rotValue = (circleDiv.clientHeight + circleDiv.clientWidth) / theText.length ;

for (let i = 0; i<theText.length; i++) {
  let newSpan = document.createElement("span");
  newSpan.innerText = theText[i];
  newSpan.style.cssText = `transform: translateX(-50%) rotate(${firstRotate}deg);`;
  circleDiv.appendChild(newSpan);
  firstRotate += rotValue *1.1;
}




