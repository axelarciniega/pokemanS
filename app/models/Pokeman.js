


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



    static PokemanTemplate(pokeman){
        return `
        <p class="selectable" onclick="app.PokemansController.getOnePokeman('${pokeman.index}">${pokeman.name}</p>
        `
    }




}