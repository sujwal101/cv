// Script for Navigation Bar

let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu");

    if(menuBox.classList.contains("open-menu")){
        menuIcon.src = "images/close.png";
    }else{
        menuIcon.src = "images/menu.png";
    }
    }


// Script for Tab Layout Switch

const allIndicator = document.querySelectorAll('.services-indicator li');
const allContent = document.querySelectorAll('.services-content li');

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })

    content.classList.add('active');
    this.classList.add('active');
  })
})
