import { AppState } from "../AppState.js"
import { Pokeman } from "../models/Pokeman.js"
import { pokemansService } from "../services/PokemansService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawActivePokeman(){
    console.log('Active Poky')
    let activePokeman = AppState.activePokeman
    setHTML('active-pokeman', activePokeman.activeTemplate)
}





function _drawPokemans(){
    let pokemans = AppState.pokemanList
    let listContent = ''

pokemans.forEach(p => listContent += Pokeman.PokemanTemplate(p))
setHTML('pokeman-list', listContent)


}




export class PokemansController{
    constructor(){
        console.log('Hi from the controller')
        this.getPokemans()
        AppState.on('pokemanList', _drawPokemans)
        AppState.on('activePokeman', _drawActivePokeman)
    }

    async getPokemans(){
        try {
            await pokemansService.getPokemans()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getOnePokeman(name){
        try {
            console.log(name)
            await pokemansService.getOnePokeman(name)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }






}