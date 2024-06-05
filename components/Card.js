export default class Card{
    constructor(name, link){
        this._name = name;
        this._link = link;
        this._isLiked = false;
        console.log({name, link});
        
    }
}