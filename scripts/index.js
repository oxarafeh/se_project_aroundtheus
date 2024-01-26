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
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
//card modal consts
const cardModal = document.querySelector("#card-edit-modal");
const cardEditBtn = profile.querySelector("#card-add-button");
const cardCloseBtn = cardModal.querySelector("#card-edit-modal-close-btn");
const cardTitleInput = cardModal.querySelector("#card-title-input");
const cardImgLinkInput = cardModal.querySelector("#image-link-input");
const cardEditForm = cardModal.querySelector(".modal__form");

//this function opens the modal box for the profile editor
function openModal() {
  //grab current profile name from html
  const currentName = profileName.textContent;
  //grab current description from html
  const currentDesc = profileDesc.textContent;
  //insert current profile name into modal
  modalNameInput.value = currentName;
  //insert current description into modal
  modalDescInput.value = currentDesc;
  //open modal
  modal.classList.add("modal_opened");
  //console.log(currentName);
}

//saves the values inputted into the modal and displays them on the page
function saveModal(e) {
  //prevent page from re loading
  e.preventDefault();
  //grab input name
  const inputName = modalNameInput.value;
  //grab input description
  const inputDesc = modalDescInput.value;
  //set values equal to page values
  profileName.textContent = inputName;
  profileDesc.textContent = inputDesc;
  closeModal();
}

//this function closes the profile editor
function closeModal() {
  modal.classList.remove("modal_opened");
}

function openCardModal() {
  //open modal
  cardModal.classList.add("modal_opened");
}

//this function closes the card editor
function closeCardModal() {
  cardModal.classList.remove("modal_opened");
}

//saves the values inputted into the card modal and displays them on the page
function saveCardModal(e) {
  //prevent page from re loading
  e.preventDefault();
  //grab input name
  const inputTitle = cardTitleInput.value;
  //grab img link
  const inputImgLink = cardImgLinkInput.value;
  //push values to cards array

  //run funtion to display cards
  closeCardModal();
}

function getCardElement(cardData) {
  //clone the template
  const cardElement = cardTemplate.cloneNode(true);
  //grab the card title and image
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__text");
  const likeBtn = cardElement.querySelector("#like-button");
  //handle like clicks
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__button_liked");
  });

  //find delete button
  //add event listener to button
  //cardElement.remove();

  //add click listener for card image
  //open image as modal

  //set card title
  cardTitleEl.textContent = cardData.name;
  //set card image and alt name
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  return cardElement;
}

function toggleLike() {
  likeBtn.classList.toggle("card__button_liked");
}

//these listen for clicks for profile edit modal
profileEditBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
profileEditForm.addEventListener("submit", saveModal);

//listen for button clicks for card modal
cardEditBtn.addEventListener("click", openCardModal);
cardCloseBtn.addEventListener("click", closeCardModal);
cardEditForm.addEventListener("submit", saveCardModal);

initialCards.forEach((cardData) => {
  //calls function that pulls card data
  const cardElement = getCardElement(cardData);
  //push card elemnt into list
  cardListEl.append(cardElement);
});
