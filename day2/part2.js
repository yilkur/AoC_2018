const fs = require('fs')

const data = fs
    .readFileSync('input.txt', { encoding: 'utf-8' })
    .split('\n')

let firstIdIndex = 0
let secondIdIndex = 1

const removeCharAtIdx = (str, idx) =>  str.slice(0, +idx) + str.slice(+idx + 1)

while (firstIdIndex < data.length) {
    secondIdIndex = firstIdIndex + 1

    while (secondIdIndex < data.length) {
        let firstWord = data[firstIdIndex]
        let secondWord = data[secondIdIndex]

        for (const idx in firstWord) {
            const firstWordCharRemoved = removeCharAtIdx(firstWord, idx)
            const secondWordCharRemoved = removeCharAtIdx(secondWord, idx)

            if (firstWordCharRemoved === secondWordCharRemoved) {
                console.log(firstWordCharRemoved)
            }
        }

        secondIdIndex++
    }
    firstIdIndex++
}
