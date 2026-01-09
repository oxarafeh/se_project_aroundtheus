/* -------------------------------------------------------------------------- */
/*                                Selector tags                               */
/* -------------------------------------------------------------------------- */

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

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

    //public method that returns fully functional populated card element 
    getView(){
        // get the card view
         this._cardElement = cardTemplate.cloneNode(true);
         this._cardElement.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;
        this._cardElement.querySelector(".card__text").textContent = this._name;
        // set event listeners
        this._setEventListeners();
        //return the card
        return(this._cardElement);
    }

    renderCard(cardData, wrapper){
        const cardElement = this.getView(cardData);
        console.log(cardElement);
        wrapper.prepend(cardElement);
    }
}