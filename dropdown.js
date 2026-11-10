var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
let elements = document.getElementsByClassName("fa-chevron-down");
let count = 0;
 
for (i = 0; i < dropdown.length; i++) {
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

function rotate(i) {
  count++;
  if (count % 2 == 1) {
    elements[i].classList.remove('rotate2');
    elements[i].classList.add('rotate1');
  } else {
    elements[i].classList.remove('rotate1');
    elements[i].classList.add('rotate2');
  }
};     