function toggleContent(button) {
  const contentBox = button.parentElement;
  const allContentBoxes = document.querySelectorAll('.content-box');

  // Collapse all other content boxes
  allContentBoxes.forEach(box => {
    if (box !== contentBox && box.classList.contains('expanded')) {
      box.classList.remove('expanded');
      box.querySelector('.toggle-button').textContent = 'Show More';
    }
  });

  // Toggle the clicked content box
  if (contentBox.classList.contains('expanded')) {
    contentBox.classList.remove('expanded');
    button.textContent = 'Show More';
  } else {
    contentBox.classList.add('expanded');
    button.textContent = 'Show Less';
  }
}
