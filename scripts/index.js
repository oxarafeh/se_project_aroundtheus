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
const modalNameInput = modal.querySelector("#profile-name-input");
const modalDescInput = modal.querySelector("#profile-description-input");
const profileName = profile.querySelector("#profile-title");
const profileDesc = profile.querySelector("#profile-description");
const profileEditForm = modal.querySelector(".modal__form");

//this function opens the modal box for the profile editor
function openModal() {
  //grab current profile name from html
  let currentName = profileName.textContent;
  //grab current description from html
  let currentDesc = profileDesc.textContent;
  //insert current profile name into modal
  modalNameInput.value = currentName;
  //insert current description into modal
  modalDescInput.value = currentDesc;
  //open modal
  modal.classList.add("modal__opened");
  console.log(currentName);
}

//saves the values inputted into the modal and displays them on the page
function saveModal(e) {
  //prevent page from re loading
  e.preventDefault();
  //grab input name
  let inputName = modalNameInput.value;
  //grab input description
  let inputDesc = modalDescInput.value;
  //set values equal to page values
  profileName.textContent = inputName;
  profileDesc.textContent = inputDesc;
  closeModal();
}

//this function closes the profile editor
function closeModal() {
  modal.classList.remove("modal__opened");
}

//these listen for the clicks, and open the modal
profileEditBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);

//listens for the form being submited
profileEditForm.addEventListener("submit", saveModal);
