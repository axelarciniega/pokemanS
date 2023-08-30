


export class Pokeman{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.imgUrl = data.imgUrl
        this.weight = data.weight
        this.height = data.height
        this.abilities = data.ability.name
        this.heldItems = data.held_items.name

    }

    get activeTemplate(){
        return `
        <div class="col-5">
        <h1>poky name</h1>
      </div>
      <div class="col-5">
        <span>level | height | weight </span>
        <span>abilities</span>
        <span>held item</span>
      </div>
    </div>
        `
    }




    static PokemanTemplate(pokeman){
        return `
        <p class="selectable" onclick="app.PokemansController.getOnePokeman('${pokeman.index}">${pokeman.name}</p>
        `
    }







}