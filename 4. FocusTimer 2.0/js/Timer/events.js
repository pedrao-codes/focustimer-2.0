import * as elements from './elements.js'
import * as actions from './actions.js'
import * as updates from './updates.js'

export function registerConstrols() {
    elements.mainControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        const sound = event.target.dataset.sound

        if(typeof actions[action] != 'function') {
            return

        } else if (sound === undefined) {
            actions[action]()

        } else {
            updates.displaySounds(event.target)
            actions[action](sound)
        }
    })
}