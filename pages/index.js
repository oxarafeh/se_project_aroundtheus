import Card from "../components/Card";

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

//go over all of the initial cards and instantiate as card obj as per Card.js

const profileEditModal = document.querySelector("#profile-edit-modal");
const modalCloseBtn = profileEditModal.querySelector(
  "#profile-edit-modal-close-btn"
);
const modalSaveBtn = profileEditModal.querySelector("#profile-edit-save-btn");

const profile = document.querySelector("#profile");
const profileEditBtn = profile.querySelector("#profile-edit-btn");
const modalNameInput = profileEditModal.querySelector("#profile-name-input");
const modalDescInput = profileEditModal.querySelector(
  "#profile-description-input"
);
const profileName = profile.querySelector("#profile-title");
const profileDesc = profile.querySelector("#profile-description");
const profileEditForm = document.forms["profile-edit-form"];
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
//card modal consts
const cardModal = document.querySelector("#card-edit-modal");
const cardEditBtn = profile.querySelector("#card-add-button");
const cardCloseBtn = cardModal.querySelector("#card-edit-modal-close-btn");
const cardTitleInput = cardModal.querySelector("#card-title-input");
const cardImgLinkInput = cardModal.querySelector("#image-link-input");
const cardEditForm = document.forms["card-edit-form"];
//image modal consts
const imageModal = document.querySelector("#image-display-modal");
const imageClostBtn = imageModal.querySelector(".modal__close");
//find close buttons
const closeButtons = document.querySelectorAll(".modal__close");

/////////////////////////////////////////////////////////////functions/////////////////////////////////////////////////

//this function opens the modal box for the profile editor
function openProfileModal() {
  //grab current profile name from html
  const currentName = profileName.textContent;
  //grab current description from html
  const currentDesc = profileDesc.textContent;
  //insert current profile name into modal
  modalNameInput.value = currentName;
  //insert current description into modal
  modalDescInput.value = currentDesc;
  //open modal
  openModal(profileEditModal);
}

//saves the values inputted into the modal and displays them on the page
function saveProfileEditModal(e) {
  //prevent page from re loading
  e.preventDefault();
  //grab input name
  const inputName = modalNameInput.value;
  //grab input description
  const inputDesc = modalDescInput.value;
  //set values equal to page values
  profileName.textContent = inputName;
  profileDesc.textContent = inputDesc;
  closeModal(profileEditModal);
}

function openModal(modal) {
  //open modal
  modal.classList.add("modal_opened");
  //add listener for escape or document click
  modal.addEventListener("click", clickHandler);
  document.addEventListener("keydown", escHandler);
}

//this function closes the card editor
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("click", clickHandler);
  document.removeEventListener("keydown", escHandler);
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

//saves the values inputted into the card modal and displays them on the page
function saveCardModal(e) {
  //prevent page from re loading
  e.preventDefault();
  //grab input name
  const name = cardTitleInput.value;
  //grab img link
  const link = cardImgLinkInput.value;
  //run function to create card
  renderCard({ name, link }, cardListEl);
  e.target.reset();
  closeModal(cardModal);
}

function getCardElement(cardData) {
  //clone the template
  const cardElement = cardTemplate.cloneNode(true);
  //grab the card title and image
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__text");
  const likeBtn = cardElement.querySelector("#like-button");
  //find image for click
  const modalImage = imageModal.querySelector(".modal__image");
  const modalDesc = imageModal.querySelector(".modal__description");

  //handle like clicks
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__button_liked");
  });

  //find delete button
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  //add event listener to button
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  //add click listener for card image
  cardImageEl.addEventListener("click", () => {
    modalImage.src = cardData.link;
    modalImage.alt = cardData.name;
    modalDesc.textContent = cardData.name;
    openModal(imageModal);
  });

  //set card title
  cardTitleEl.textContent = cardData.name;
  //set card image and alt name
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  return cardElement;
}

//these listen for clicks for profile edit modal
profileEditBtn.addEventListener("click", openProfileModal);
profileEditForm.addEventListener("submit", saveProfileEditModal);

//listen for button clicks for card modal
cardEditBtn.addEventListener("click", () => openModal(cardModal));
cardEditForm.addEventListener("submit", saveCardModal);

//listeners for image modal
initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

closeButtons.forEach((button) => {
  // find the closest popup
  const popup = button.closest(".modal");
  // set the listener
  button.addEventListener("click", () => closeModal(popup));
});

function clickHandler(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.currentTarget);
  }
}

function escHandler(event) {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}
