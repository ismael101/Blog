import {combineReducers} from 'redux'
import Sports from './Sports'
import Politics from './Politics'
import Business from './Business'
import Travel from './Travel'

export default combineReducers({
    sports:Sports,
    politics:Politics,
    business:Business,
    travel:Travel
})