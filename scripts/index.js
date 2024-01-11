const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

const modal = document.querySelector("#profile-edit-modal");
const modalCloseBtn = modal.querySelector("#profile-edit-modal-close-btn");
const modalSaveBtn = modal.querySelector("#profile-edit-save-btn");
const profile = document.querySelector("#profile");
const profileEditBtn = profile.querySelector("#profile-edit-btn");

function openModal() {
  modal.classList.add(".modal__opened");
  console.log("modal opened");
}

function closeModal() {
  modal.classList.remove(".modal__opened");
  console.log("modal closed");
}

profileEditBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
