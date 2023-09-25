import * as elements from './elements.js'
import state from './state.js'

export function displaySounds(target) {

    if(state.isMute) {
        target.classList.add('selected-button')
        return
    }
    
    const oldElement = document.querySelector(`[data-sound="${state.sound}"]`)
    oldElement.classList.remove('selected-button')
    
    if(oldElement != target) {
        target.classList.add('selected-button')
    }
}

export function displayTimer(updatedMinutes, updatedSeconds) {
    
    updatedMinutes = updatedMinutes ?? state.minutes
    updatedSeconds = updatedSeconds ?? state.seconds

    elements.minutes.textContent = String(updatedMinutes).padStart(2, "0")
    elements.seconds.textContent = String(updatedSeconds).padStart(2, "0")
}