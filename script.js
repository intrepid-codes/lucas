var menuBtn = document.querySelector(".ri-menu-line")
var menuPanel = document.querySelector("#page1 nav ul")
var menuOpen = 1
menuBtn.addEventListener("click", function(){
  if (menuOpen == 1) {
    menuPanel.style.left = "0"
    menuOpen = 0
  }else{
    menuPanel.style.left = "100%"
    menuOpen = 1
  }
})