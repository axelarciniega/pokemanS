


export class Pokemon{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.imgUrl = data.imgUrl
        this.weight = data.weight
        this.height = data.height
        this.abilities = data.ability.name
        this.heldItems = data.held_items.name

    }



    static PokemonTemplate(pokemon){
        return `
        <p class="selectable" onclick="app.PokemonsController.getOnePokemon('${pokemon.index}>${pokemon.name}</p>
        `
    }




}