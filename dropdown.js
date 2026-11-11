var dropdown = document.getElementsByClassName("dropdown-btn");
var chevrons = document.getElementsByClassName("fa-chevron-down");
var dropdownContent = document.getElementsByClassName("dropdown-content");
let rotCount = [0,0,0,0,0];
let slideCount = [0,0,0,0,0];

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    rotate(i);
    slide(i);
  });
};

function rotate(n) {
  rotCount[n]++;
  if (rotCount[n] % 2 == 1) {
    chevrons[n].classList.remove('rotate2');
    chevrons[n].classList.add('rotate1');
  } else {
    chevrons[n].classList.remove('rotate1');
    chevrons[n].classList.add('rotate2');
  };
}; 

function slide(n) {
  slideCount[n]++;
  for (let k = n * 8; k < (n + 1) * 8; k++) {
    if (slideCount[n] % 2 == 1) {
      dropdownContent[k].classList.remove('slide2');
      dropdownContent[k].classList.add('slide1');
    } else {
      dropdownContent[k].classList.remove('slide1');
      dropdownContent[k].classList.add('slide2');
    };
  };
}; 