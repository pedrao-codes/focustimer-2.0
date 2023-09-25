import * as updates from './updates.js'
import * as elements from './elements.js'
import state from './state.js'

export function countdown() {
    
    if(!state.isRunning) {
        updates.displayTimer(state.minutes, state.seconds)
        return
    }
    
    clearInterval(state.countdownId)
    
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        state.isRunning = !state.isRunning
        state.isRunning = document.documentElement.classList.toggle('running')
        return
    }
    
    updates.displayTimer(minutes, seconds)

    state.countdownId = setTimeout(countdown, 1000)
}