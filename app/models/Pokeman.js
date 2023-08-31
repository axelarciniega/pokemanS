


export class Pokeman{
    constructor(data){
        this.id = data.id
        this.name = data.name 
        this.imgUrl = data.imgUrl
        this.weight = data.weight
        this.height = data.height
        this.abilities = data.abilities
        this.heldItems = data.held_items

    }

    get activeTemplate(){
        return `
        <div class="col-5">
        <h1>${this.name}</h1>
      </div>
      <div class="col-5">
        <span>${this.height} | ${this.weight}  </span>
        <span>${this.abilities}</span>
        <span>${this.heldItems}</span>
      </div>
    </div>
        `
    }




    static PokemanTemplate(pokeman){
        return `
        <p class="selectable" onclick="app.PokemansController.getOnePokeman('${pokeman.index}')">${pokeman.name}</p>
        `
    }







}