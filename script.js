/**
 * Create elements
 */
// Header
let header = document.createElement("header");
let headerButton = document.createElement("img");
headerButton.setAttribute("src", "clipart2431071.png");
headerButton.classList.add("open");
let headerText = document.createElement("h1");
headerText.innerHTML = "Rick and Morty API";

// add elements to header
header.appendChild(headerButton);
header.appendChild(headerText);

// Menu
let menu = document.createElement("div");
menu.setAttribute("id", "menu");
menu.classList.add("inactive");

let menuCloseButton = document.createElement("button");
menuCloseButton.classList.add("close");
menuCloseButton.innerHTML = "x";

let menuListContainer = document.createElement("div");
menuListContainer.classList.add("menuList");

menu.appendChild(menuCloseButton);
menu.appendChild(menuListContainer);

// Main content
let mainContent = document.createElement("div");
mainContent.setAttribute("id", "mainContent");
let mainImageElement = document.createElement("img");
mainContent.appendChild(mainImageElement);
// <img />

/**
 * Add everything to the body
 */
document.body.appendChild(header);
document.body.appendChild(menu);
document.body.appendChild(mainContent);

// Event listeners for menu
headerButton.addEventListener("click", function (e) {
  let menu = document.querySelector("#menu");
  menu.classList.remove("inactive");
  menu.classList.add("active");
  console.log("clicked open button");
});
menuCloseButton.addEventListener("click", function (e) {
  let menu = document.querySelector("#menu");
  menu.classList.add("inactive");
  menu.classList.remove("active");
  console.log("clicked closed button");
});

// Use API to create menu items
let url = 'https://rickandmortyapi.com/api/character';
fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res.results);
    for (let i = 0; i < res.results.length; i++) {
      let item = document.createElement('a');
      item.classList.add("menuItem");
      item.setAttribute("data-img", res.results[i].image);
      let itemText = document.createTextNode(res.results[i].name);
      item.appendChild(itemText);

      item.addEventListener("click", function (e) {
        e.preventDefault();
        let imageUrl = e.srcElement.getAttribute("data-img");
        mainImageElement.setAttribute("src", imageUrl);
      });
      let menuList = document.querySelector('.menuList');
      menuList.appendChild(item);

      // stop at 6
      if (i == 18) {
        break;
      }
    }
  })
  .catch(err => {
    console.log("something went wrong", err);
  });