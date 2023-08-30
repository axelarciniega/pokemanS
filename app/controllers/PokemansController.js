import { AppState } from "../AppState.js"
import { Pokeman } from "../models/Pokeman.js"
import { pokemansService } from "../services/PokemansService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function drawActivePokeman(){
    let activePokeman = AppState.activePokeman
    setHTML('active-pokeman', activePokeman)
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
    }

    async getPokemans(){
        try {
            await pokemansService.getPokemans()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getOnePokeman(index){
        try {
            
            await pokemansService.getOnePokeman(index)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }






}