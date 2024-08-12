let rchTxtVisible = false;
let stdTxtVisible = false;

document.getElementById("rch-btn").addEventListener("click", function() {
  if (stdTxtVisible) {
    document.getElementById("std-txt").style.display = "none";
    stdTxtVisible = false;
  }
  if (rchTxtVisible) {
    document.getElementById("rch-txt").style.display = "none";
    rchTxtVisible = false;
  } else {
    document.getElementById("rch-txt").style.display = "block";
    rchTxtVisible = true;
  }
});

document.getElementById("std-btn").addEventListener("click", function() {
  if (rchTxtVisible) {
    document.getElementById("rch-txt").style.display = "none";
    rchTxtVisible = false;
  }
  if (stdTxtVisible) {
    document.getElementById("std-txt").style.display = "none";
    stdTxtVisible = false;
  } else {
    document.getElementById("std-txt").style.display = "block";
    stdTxtVisible = true;
  }
});