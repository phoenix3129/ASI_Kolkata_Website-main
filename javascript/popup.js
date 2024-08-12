
const popupTrigger = document.getElementById('popup-trigger');
popupTrigger.addEventListener('click', function() {
  alert('Coming soon!');
});

document.getElementById("pop-trigger").addEventListener("click", function(event) {
  event.preventDefault();
  alert("Coming soon!");
});