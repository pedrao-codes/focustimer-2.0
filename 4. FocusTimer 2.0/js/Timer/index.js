import * as events from './events.js'
import * as update from './updates.js'
import state from './state.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds
    
    update.displayTimer(minutes, seconds)
    events.registerConstrols()
}