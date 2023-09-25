export const sounds = {
    forest: new Audio('././assets/Floresta.wav'),
    rain: new Audio('././assets/Chuva.wav'),
    coffee: new Audio('././assets/Cafeteria.wav'),
    campfire: new Audio('././assets/Lareira.wav')
}

for(let sound in sounds) {
    sounds[sound].loop = true
}