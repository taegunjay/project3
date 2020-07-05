


let url = 'https://rickandmortyapi.com/api/character'
let menu = document.createElement("div");
menu.setAttribute('id', 'menu');
menu.classList.add('inactive');
menu.classList.add('active');
console.log(menu);
document.body.prepend(menu);

menu.innerHTML = '<div><button class="close">x</button></div><div class="menuList"></div>';


fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res.results);
        for (let i = 0; i < res.results.length; i++) {
            let item = document.createElement('a');
            item.classList.add("menuItem");
            let itemText = document.createTextNode(res.results[i].name);
            item.appendChild(itemText);
            let menuList = document.querySelector('.menuList');
            menuList.appendChild(item);

            if (i == 8) {
                break;
            }
        }
    })
    .catch(err => {
        console.log("something went wrong", err);
    });


let closeButton = document.createElement("div");
closeButton.classList.add("close");
document.body.prepend(menu);


let buttonImg = document.createElement("img");
buttonImg.src = "clipart2431071.png";
buttonImg.classList.add("open");
let header = document.querySelector("header");
header.appendChild(buttonImg);
let openButton = document.querySelector(".open");






openButton.addEventListener("click", function (e) {
    let menu = document.querySelector("#menu");
    menu.classList.remove("inactive");
    menu.classList.add("active");
    console.log("clicked open button");
});

closeButton.addEventListener("click", function (e) {
    let menu = document.querySelector("#menu");
    menu.classList.add("inactive");
    menu.classList.remove("active");
    console.log("clicked closed button");
});
