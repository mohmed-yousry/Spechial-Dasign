// start landing
let landing = document.querySelector(".landing");
let but = document.querySelector(".landing .heder .but");
but.addEventListener("click", (e) => {
  document.querySelector(".landing .heder .link").classList.toggle("show");
});
// end landing

// start seting box
let settingBox = document.querySelector(".setting-box");
let inpGeer = document.querySelector(".setting-box .icon-setting");
inpGeer.onclick = () => {
  settingBox.classList.toggle("active");
  document
    .querySelector(".setting-box .icon-setting i")
    .classList.toggle("fa-spin");
};

// start color

let allColor = Array.from(document.querySelectorAll(".color-box .color span"));
if (localStorage.getItem("color")) {
  for (let i = 0; i < allColor.length; i++) {
    if (
      allColor[i].getAttribute("colorAttr") == localStorage.getItem("color")
    ) {
      for (x = 0; x < allColor.length; x++) {
        allColor[x].classList.remove("active");
      }
      allColor[i].classList.add("active");
    }
  }
}

for (let i = 0; i < allColor.length; i++) {
  finActive(allColor);
  if (allColor[i].classList.contains("active") == true) {
    document.documentElement.style.setProperty(
      "--main-color",
      allColor[i].getAttribute("colorAttr")
    );

    localStorage.setItem("color", allColor[i].getAttribute("colorAttr"));
  }
  allColor[i].addEventListener("click", (x) => {
    document.documentElement.style.setProperty(
      "--main-color",
      x.target.getAttribute("colorAttr")
    );

    localStorage.setItem("color", x.target.getAttribute("colorAttr"));
  });
}
// End color

//start stopBacground
// start chengBacground
let allBtn = Array.from(document.querySelectorAll(".box-bacground .span span"));
let chencgBacGround = ``;

function setIN() {
  chencgBacGround = setInterval(() => {
    let num = Math.floor(Math.random() * 8);
    landing.style.backgroundImage = `url("./img/landing/${num}.jpg")`;
  }, 5000);
}

function clear(v) {
  clearInterval(v);
}

finActive(allBtn);
setIN();
allBtn[0].onclick = function () {
  setIN();
};
allBtn[1].onclick = function () {
  clear(chencgBacGround);
};

// End Bacground
//End stopBacground

// start select backgroundImage

let allImgBaceground = Array.from(
  document.querySelectorAll(".setting-box .box-select-img-baceground span")
);
let numImg = ``;

if (localStorage.getItem("baceground-img")) {
  numImg = localStorage.getItem("baceground-img");
  landing.style.backgroundImage = `url("./img/landing/${numImg}.jpg")`;
  clear(chencgBacGround);
  allBtn[1].classList.add("active");
  allBtn[0].classList.remove("active");
  allImgBaceground.forEach((li) => {
    if (li.getAttribute("numAtt") == numImg) {
      li.classList.add("active");
    }
  });
}

allBtn[0].addEventListener("click", (e) => {
  localStorage.removeItem("baceground-img");
  allImgBaceground.forEach((lis) => {
    lis.classList.remove("active");
  });
});

allImgBaceground.forEach((img) => {
  img.addEventListener("click", (e) => {
    for (let i = 0; i < allImgBaceground.length; i++) {
      allImgBaceground[i].classList.remove("active");
    }
    e.target.classList.add("active");
    clear(chencgBacGround);
    allBtn[1].classList.add("active");
    allBtn[0].classList.remove("active");
    numImg = e.target.getAttribute("numAtt");
    localStorage.setItem("baceground-img", numImg);
    landing.style.backgroundImage = `url("./img/landing/${numImg}.jpg")`;
  });
});

function finActive(arr) {
  arr.forEach((e) => {
    e.addEventListener("click", (x) => {
      arr.forEach((x) => x.classList.remove("active"));
      x.target.classList.add("active");
    });
  });
}
// End select backgroundImage

// start show bold
let allPoldBtn = Array.from(
  document.querySelectorAll(".box-show-bold .span span")
);
finActive(allPoldBtn);
allPoldBtn[1].onclick = function () {
  document.querySelector(".bold").classList.add("none");
};
allPoldBtn[0].onclick = function () {
  document.querySelector(".bold").classList.remove("none");
};
// End show bold

// start our skils
let ourSkilsContainer = document.querySelector("#our-skils .container");
let allP = Array.from(
  document.querySelectorAll("#our-skils .container .content p")
);

allP.forEach((p) => {
  p.style.width = p.getAttribute("attwidth");
});
// End our skils

// start our galery
let containerOurGalery = document.querySelector("#our-galery .container");
let contentOurGalery = document.querySelector(
  "#our-galery .container .content"
);
let numGalery = 1;
class Part {
  constructor(img) {
    let part = document.createElement("div");
    part.className = `part`;
    part.setAttribute("attrnum", numGalery);
    let imgeg = document.createElement("img");
    imgeg.src = img;
    part.appendChild(imgeg);
    contentOurGalery.appendChild(part);
    numGalery++;
  }
}

let part1 = new Part("./img/our-galery/01.jpg");
let part2 = new Part("./img/our-galery/02.jpg");
let part3 = new Part("./img/our-galery/03.jpg");
let part4 = new Part("./img/our-galery/04.jpg");
let part5 = new Part("./img/our-galery/05.jpg");
let part6 = new Part("./img/our-galery/06.png");
let part7 = new Part("./img/our-galery/07.jpg");
let part8 = new Part("./img/our-galery/08.jpg");
let part9 = new Part("./img/our-galery/09.jpg");
let part10 = new Part("./img/our-galery/10.jpg");

let allPartOurGalery = Array.from(
  document.querySelectorAll("#our-galery .container .content .part")
);
let allImgOurGalery = Array.from(
  document.querySelectorAll("#our-galery .container .content .part img")
);

let path = ``;

for (let i = 0; i < allImgOurGalery.length; i++) {
  allImgOurGalery[i].addEventListener("click", (e) => {
    path = `${e.target.getAttribute("src")}`;
  });
}

allPartOurGalery.forEach((par) => {
  par.addEventListener("click", (e) => {
    let popUp = document.createElement("div");
    popUp.className = `popUp`;
    let title = document.createElement("h2");
    title.innerHTML = `imges number ${par.getAttribute("attrnum")}`;
    popUp.appendChild(title);

    let btn = document.createElement("span");
    btn.innerHTML = `X`;
    popUp.appendChild(btn);

    let imgGalery = document.createElement("img");
    imgGalery.src = path;
    popUp.appendChild(imgGalery);
    contentOurGalery.appendChild(popUp);
    document.body.style.backgroundColor = "rgb(201 196 196 / 38%)";
    if (contentOurGalery.children.length > 11) {
      popUp.remove();
    }
    btn.onclick = function () {
      popUp.remove();
      document.body.style.backgroundColor = "white";
    };
  });
});

// End our galery
// ./img/our-galery/01.jpg

// start Our-Features
let contentOurFeatures = document.querySelector(
  "#Our-Features .container .content"
);
class Card {
  constructor(img, title, text) {
    let card = document.createElement("div");
    card.classList.add("card");
    let imeg = document.createElement("img");
    imeg.src = img;
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title;
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = text;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(imeg);
    card.appendChild(cardBody);
    contentOurFeatures.appendChild(card);
  }
}

let card1 = new Card(
  "./img/prodect/advertising.svg",
  "Marketing",
  `We are professional marketeers, we will do anything you imagine in no time.

`
);

let card2 = new Card(
  "./img/prodect/hosting-icon.svg",
  "Hosting",
  `We are professional marketeers, we will do anything you imagine in no time.

`
);
let card3 = new Card(
  "./img/prodect/mobile-app.svg",
  "Mobile Develope",
  `We are professional marketeers, we will do anything you imagine in no time.

`
);
let card4 = new Card(
  "./img/prodect/graphic-design.svg",
  "Cloud and Servers",
  `We are professional marketeers, we will do anything you imagine in no time.

`
);

let card6 = new Card(
  "./img/prodect/web-design.svg",
  "Seo",
  `We are professional marketeers, we will do anything you imagine in no time.

`
);

// start reset button
let resetBtn = document.querySelector(".btn-reset");
resetBtn.onclick = function () {
  localStorage.removeItem("baceground-img");
  allPoldBtn[0].classList.add("active");
  allPoldBtn[1].classList.remove("active");
  allBtn[0].classList.add("active");
  allBtn[1].classList.remove("active");
  setIN();
  allImgBaceground.forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelector(".bold").classList.remove("none");
};
// End reset button
