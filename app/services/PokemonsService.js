import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"

// @ts-ignore
const pokeapi = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon?limit=30',
    timeout: 5000
})



class PokemonsService{

    async getPokemons(){
        const res = await pokeapi.get('pokemons')
        console.log('We got em', res.data)
        AppState.pokemonList = res.data.results
        console.log(AppState.pokemonList)
    }

    async getOnePokemon(index){
        
        console.log(index)
        const res = await pokeapi.get(`pokemon/${index}`)
        console.log('ONE BAD BOI',res.data)
        AppState.activePokemon = new Pokemon(res.data)
    }







}







export const pokemonsService = new PokemonsService()