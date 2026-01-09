/* -------------------------------------------------------------------------- */
/*                                Selector tags                               */
/* -------------------------------------------------------------------------- */

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const imageModal = document.querySelector("#image-display-modal");

  /* -------------------------------------------------------------------------- */
  /*                                 Card class                                 */
  /* -------------------------------------------------------------------------- */
export default class Card{
    constructor({name, link}, cardSelector){
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._isLiked = false;
        
    }

    _setEventListeners(){
        //#like-button
        this._cardElement.querySelector("#like-button").addEventListener("click", () => {
            this._handleLikeIcon();
        });
        //.card__delete-button
        this._cardElement.querySelector("#delete-button").addEventListener("click", () => {
            this._handleDelete();
        });
        //.card__image
        this._cardElement.querySelector('.card__image').addEventListener("click", () => {
            const modalImage = imageModal.querySelector(".modal__image");
            const modalDesc = imageModal.querySelector(".modal__description");
            modalImage.src = this._link;
            modalImage.alt = this._name;
            modalDesc.textContent = this._name;
            this._openModal(imageModal);
        })
    }

    _handleLikeIcon(){
        this._cardElement.querySelector("#like-button").classList.toggle("card__button_liked");
    }

    _handleDelete(){
        this._cardElement.remove();
        this._cardElement = null;
    }

    _openModal(modal){
        //open modal
        modal.classList.add("modal_opened");
        //add listener for escape or document click
        modal.addEventListener("click", this._clickHandler);
        document.addEventListener("keydown", this._escHandler);

    }

    _closeModal(modal) {
        modal.classList.remove("modal_opened");
        modal.removeEventListener("click", this._clickHandler);
        document.removeEventListener("keydown", this._escHandler);
}

    _clickHandler(event) {
        if (event.target === event.currentTarget) {
        this._closeModal(event.currentTarget);
                                                    }
                        }



    _escHandler(event) {
        if (event.key === "Escape") {
        const openedModal = document.querySelector(".modal_opened");
        this._closeModal(openedModal);
                                    }
                        }

    //public method that returns fully functional populated card element 
    getView(){
        // get the card view
        this._cardElement = cardTemplate.cloneNode(true);
        this._cardElement.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;
        this._cardElement.querySelector(".card__text").textContent = this._name;
        //this._cardElement.querySelector(".card__image").alt = this._name;
        // set event listeners
        this._setEventListeners();
        //return the card
        return(this._cardElement);
    }

    renderCard(cardData, wrapper){
        const cardElement = this.getView(cardData);
        wrapper.prepend(cardElement);
    }
}