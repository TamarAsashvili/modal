//get elements
let modal = document.getElementById("simpleModal");
//modal button
let modalBtn = document.getElementById("modalBtn");
//get close btn, here we add vich num from class[0]
let closeBtn = document.getElementsByClassName("closeBtn")[0];

//events
modalBtn.addEventListener("click", openModal);
//close
closeBtn.addEventListener("click", closeModal);
//out click
window.addEventListener("click", clickout);

//function to open modal

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickout(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
