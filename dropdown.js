var dropdown = document.getElementsByClassName("dropdown-btn");
var chevrons = document.getElementsByClassName("fa-chevron-down");
var dropdownContent = document.getElementsByClassName("dropdown-content");
var sub = document.getElementsByClassName("sub");
let rotCount = [0,0,0,0,0];
let slideCount = [0,0,0,0,0];
let fadeSmallTimer = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let fadeTimer = [0,0,0,0,0,0,0,0,0,0];
let fadeLinkTimer = 0;
let fadeHomeTimer = 0;

document.getElementById("footerLink").classList.add("fadeOutLink");
document.getElementById("home").classList.add("fadeOutHome");

for (let i = 0; i < dropdownContent.length; i++) {
  dropdownContent[i].classList.add("slideIn","fadeOutSmall");
};
 
for (let i = 0; i < sub.length; i++) {
  sub[i].classList.add("fadeOut");
};

document.getElementById("footerLink").addEventListener("mouseover", function() {
  fadeInLink();
});
document.getElementById("footerLink").addEventListener("mouseout", function() {
  fadeOutLink();
});

document.getElementById("home").addEventListener("mouseover", function() {
  fadeInHome();
});
document.getElementById("home").addEventListener("mouseout", function() {
  fadeOutHome();
});

for (let i = 0; i < sub.length; i++) {
  sub[i].addEventListener("mouseover", function() {
    fadeIn(i);
  });
  sub[i].addEventListener("mouseout", function() {
    fadeOut(i);
  });
};

for (let i = 0; i < dropdownContent.length; i++) {
  dropdownContent[i].addEventListener("mouseover", function() {
    fadeInSmall(i);
  });
  dropdownContent[i].addEventListener("mouseout", function() {
    fadeOutSmall(i);
  });
};

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    rotate(i);
    slide(i);
  });
};

function rotate(n) {
  rotCount[n]++;
  if (rotCount[n] % 2 == 1) {
    chevrons[n].classList.remove("rotateIn");
    chevrons[n].classList.add("rotateOutAnim");
    setTimeout(function() {
      chevrons[n].classList.remove("rotateOutAnim");
      chevrons[n].classList.add("rotateOut");
    }, 150);
  } else {
    chevrons[n].classList.remove("rotateOut");
    chevrons[n].classList.add("rotateInAnim");
    setTimeout(function() {
      chevrons[n].classList.remove("rotateInAnim");
      chevrons[n].classList.add("rotateIn");
    }, 150);
  };
}; 

function slide(n) {
  slideCount[n]++;
  for (let k = n * 8; k < (n + 1) * 8; k++) {
    if (slideCount[n] % 2 == 1) {
      dropdownContent[k].classList.remove("slideIn");
      dropdownContent[k].classList.add("slideOutAnim");
      setTimeout(function() {
        dropdownContent[k].classList.remove("slideOutAnim");
        dropdownContent[k].classList.add("slideOut");
      }, 150);
    } else {
      dropdownContent[k].classList.remove("slideOut");
      dropdownContent[k].classList.add("slideInAnim");
      setTimeout(function() {
        dropdownContent[k].classList.remove("slideInAnim");
        dropdownContent[k].classList.add("slideIn");
      }, 150);
    };
  };
}; 

function fadeOut(n) {
  clearTimeout(fadeTimer[n]);
  sub[n].classList.remove("fadeIn");
  sub[n].classList.remove("fadeInAnim");
  sub[n].classList.add("fadeOutAnim");
  fadeTimer[n] = setTimeout(function() {
    sub[n].classList.remove("fadeOutAnim");
    sub[n].classList.add("fadeOut");
  }, 150);
};

function fadeIn(n) {
  clearTimeout(fadeTimer[n]);
  sub[n].classList.remove("fadeOut");
  sub[n].classList.remove("fadeOutAnim");
  sub[n].classList.add("fadeInAnim");
  fadeTimer[n] = setTimeout(function() {
    sub[n].classList.remove("fadeInAnim");
    sub[n].classList.add("fadeIn");
  }, 150);
};

function fadeOutSmall(n) {
  clearTimeout(fadeSmallTimer[n]);
  dropdownContent[n].classList.remove("fadeInSmall");
  dropdownContent[n].classList.remove("fadeInSmallAnim");
  dropdownContent[n].classList.add("fadeOutSmallAnim");
  fadeSmallTimer[n] = setTimeout(function() {
    dropdownContent[n].classList.remove("fadeOutSmallAnim");
    dropdownContent[n].classList.add("fadeOutSmall");
  }, 150);
};

function fadeInSmall(n) {
  clearTimeout(fadeSmallTimer[n]);
  dropdownContent[n].classList.remove("fadeOutSmall");
  dropdownContent[n].classList.remove("fadeOutSmallAnim");
  dropdownContent[n].classList.add("fadeInSmallAnim");
  fadeSmallTimer[n] = setTimeout(function() {
    dropdownContent[n].classList.remove("fadeInSmallAnim");
    dropdownContent[n].classList.add("fadeInSmall");
  }, 150);
};

function fadeInLink() {
  clearTimeout(fadeLinkTimer);
  document.getElementById("footerLink").classList.remove("fadeOutLink");
  document.getElementById("footerLink").classList.remove("fadeOutLinkAnim");
  document.getElementById("footerLink").classList.add("fadeInLinkAnim");
  fadeLinkTimer = setTimeout(function() {
    document.getElementById("footerLink").classList.remove("fadeInLinkAnim");
    document.getElementById("footerLink").classList.add("fadeInLink");
  }, 150);
};

function fadeOutLink() {
  clearTimeout(fadeLinkTimer);
  document.getElementById("footerLink").classList.remove("fadeInLink");
  document.getElementById("footerLink").classList.remove("fadeInLinkAnim");
  document.getElementById("footerLink").classList.add("fadeOutLinkAnim");
  fadeLinkTimer = setTimeout(function() {
    document.getElementById("footerLink").classList.remove("fadeOutLinkAnim");
    document.getElementById("footerLink").classList.add("fadeOutLink");
  }, 150);
};

function fadeInHome() {
  clearTimeout(fadeHomeTimer);
  document.getElementById("home").classList.remove("fadeOutHome");
  document.getElementById("home").classList.remove("fadeOutHomeAnim");
  document.getElementById("home").classList.add("fadeInHomeAnim");
  fadeHomeTimer = setTimeout(function() {
    document.getElementById("home").classList.remove("fadeInHomeAnim");
    document.getElementById("home").classList.add("fadeInHome");
  }, 150);
};

function fadeOutHome() {
  clearTimeout(fadeHomeTimer);
  document.getElementById("home").classList.remove("fadeInHome");
  document.getElementById("home").classList.remove("fadeInHomeAnim");
  document.getElementById("home").classList.add("fadeOutHomeAnim");
  fadeHomeTimer = setTimeout(function() {
    document.getElementById("home").classList.remove("fadeOutHomeAnim");
    document.getElementById("home").classList.add("fadeOutHome");
  }, 150);
};