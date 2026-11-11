var dropdown = document.getElementsByClassName("dropdown-btn");
var chevrons = document.getElementsByClassName("fa-chevron-down");
let count = [0,0,0,0,0];


for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    };
    rotate(i);
  });
};

function rotate(n) {
  count[n]++;
  if (count[n] % 2 == 1) {
    chevrons[n].classList.remove('rotate2');
    chevrons[n].classList.add('rotate1');
  } else {
    chevrons[n].classList.remove('rotate1');
    chevrons[n].classList.add('rotate2');
  };
}; 