import { Free } from "./Free"
import {Basic} from "./Basic"
import {Premium} from "./Premium"


let cliente1 = new Free('Martín', 15, 0, true, 'Free')
let cliente2 = new Basic('Alvaro', 30, 3, false, 'Basic')
let cliente3 = new Premium('PabloEscobar', 30, 9, false, 'Premium')

console.log(cliente1.getMembership())
console.log(cliente2.getMembership())
console.log(cliente3.getMembership())