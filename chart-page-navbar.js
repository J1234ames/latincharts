var dropdownBtn = document.getElementsByClassName("dropdown-btn");
var chevrons = document.getElementsByClassName("fa-chevron-down");
var dropdownContent = document.getElementsByClassName("dropdown-content");

for (let i = 0; i < chevrons.length; i++) {
  chevrons[i].style.animationDelay = "-0.15s";
  chevrons[i].classList.add("rotateIn", "rotateOut")
  chevrons[i].classList.toggle("rotateIn");
  setTimeout(function() {
    chevrons[i].style.animationDelay = "0s";
  },300);
};

for (let i = 0; i < dropdownContent.length; i++) {
  dropdownContent[i].style.animationDelay = "-0.15s";
  dropdownContent[i].classList.add("slideIn", "slideOut");
  dropdownContent[i].classList.toggle("slideIn");
  setTimeout(function() {
    dropdownContent[i].style.animationDelay = "0s";
  },300);
};

for (let i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].addEventListener("click", function() {
    chevrons[i].classList.toggle("rotateIn");
    chevrons[i].classList.toggle("rotateOut");
    for (let n = 0; n < 8; n++) {
      dropdownContent[n + 8 * i].classList.toggle("slideIn");
      dropdownContent[n + 8 * i].classList.toggle("slideOut");
    };
  });
};