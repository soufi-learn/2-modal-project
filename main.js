// ELEMENTS
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");

// OPEN MODAL BOX
openButton.addEventListener("click", () => {
  toggleModal();
});

// CLOSE MODAL BOX
closeButton.addEventListener("click", () => {
  toggleModal();
});

// CLOSE MODAL BOX WHEN CLICK OUT OF THE BOX CONTENT
modalBackdrop.addEventListener("click", (e) => {
  const currentElement = e.target;

  if (currentElement.classList.contains("modal-backdrop")) {
    toggleModal();
  }
});

const toggleModal = () => {
  modalBackdrop.classList.toggle("show-modal");
};
