import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokemonsService } from "../services/PokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"








function _drawPokemons(){
    let pokemons = AppState.pokemonList
    let listContent = ''

pokemons.forEach(p => listContent += Pokemon.PokemonTemplate(p))
setHTML('pokemon-list', listContent)


}




export class PokemonsController{
    constructor(){
        console.log('Hi from the controller')
        this.getPokemons()
        AppState.on('pokemonList', _drawPokemons)
    }

    async getPokemons(){
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getOnePokemon(index){
        try {
            
            await pokemonsService.getOnePokemon(index)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }






}