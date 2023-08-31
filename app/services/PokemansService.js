import { AppState } from "../AppState.js"
import { Pokeman } from "../models/Pokeman.js"

// @ts-ignore
const pokeapi = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon?limit=30',
    timeout: 5000
})



class PokemansService{

    async getPokemans(){
        const res = await pokeapi.get('pokemans')
        console.log('We got em', res.data)
        AppState.pokemanList = res.data.results
        console.log(AppState.pokemanList)
    }

    async getOnePokeman(name){
        
        console.log(name)
        const res = await pokeapi.get(`pokemon/${name}`)
        console.log('ONE BAD BOI',res.data)
        AppState.activePokeman = new Pokeman(res.data)
    }







}







export const pokemansService = new PokemansService()