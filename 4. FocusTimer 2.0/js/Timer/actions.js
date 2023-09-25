import { minutes } from './elements.js'
import { sounds } from './sounds.js'
import * as update from './updates.js'
import * as timer from './timer.js'
import state from './state.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function add() {
    if(state.isRunning) {
        return
    }

    let addMinutes = Number(minutes.textContent) + 5

    update.displayTimer(addMinutes, null)
}

export function decrease() {
    if(state.isRunning) {
        return
    }

    let decreaseMinutes = Number(minutes.textContent) - 5

    if(decreaseMinutes < 0) {
        decreaseMinutes = 0
    }

    update.displayTimer(decreaseMinutes, null)
}

export function toggleSound(sound) {

    if(state.isMute) {
        state.isMute = false
        state.sound = sound
        sounds[sound].play()
    } else {
        if(state.sound === sound) {
            state.sound = undefined
            state.isMute = true

            sounds[sound].pause()
            sounds[sound].currentTime = 0
        } else {
            sounds[state.sound].pause()
            sounds[state.sound].currentTime = 0

            state.sound = sound
            sounds[sound].play()
        }
    }
}