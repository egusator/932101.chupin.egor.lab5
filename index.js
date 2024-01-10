var buttons = document.querySelectorAll(".block-button");
var popups = document.querySelectorAll(".popup");

popups.forEach(function(popup) {
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.remove('open');
        }
    });
});

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popups[index].classList.add("open");
  });
});
