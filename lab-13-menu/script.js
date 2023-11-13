const letters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const numbers = "1 2 3 4 5 6 7 8 9 10";
const minion = document.getElementById("minion");
const menuContainer = document.querySelector(".menu-container");

function toggleMenu() {
  menuContainer.style.display =
    menuContainer.style.display === "block" ? "none" : "block";
}

function showContent(contentType) {
  if (contentType === "letters") {
    minion.textContent = letters;
  } else if (contentType === "numbers") {
    minion.textContent = numbers;
  }

  menuContainer.style.display = "none";
}
