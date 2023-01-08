const fs = require('fs')

const data = fs
    .readFileSync('input.txt', { encoding: 'utf-8' })
    .split('\n')

let firstIdIndex = 0
let secondIdIndex = 1

while (firstIdIndex < data.length) {
    secondIdIndex = firstIdIndex + 1

    while (secondIdIndex < data.length) {
        let firstWord = data[firstIdIndex]
        let secondWord = data[secondIdIndex]

        for (const idx in firstWord) {
            const firstWordCharRemoved = firstWord.slice(0, +idx) + firstWord.slice(+idx + 1)
            const secondWordCharRemoved = secondWord.slice(0, +idx) + secondWord.slice(+idx + 1)

            console.log(firstWordCharRemoved, secondWordCharRemoved)

            if (firstWordCharRemoved === secondWordCharRemoved) {
            }
        }

        secondIdIndex++
    }
    firstIdIndex++
}

