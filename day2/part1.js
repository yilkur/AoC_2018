const fs = require('fs')

const data = fs
    .readFileSync('input.txt', { encoding: 'utf-8' })
    .split('\n')

const counts = {
    exactlyTwoTimesAppearingCount: 0,
    exactlyThreeTimesAppearingCount: 0
}


for (const ID of data) {
    const letterCounts = {}
    let isTwoTimesFound = false
    let isThreeTimesFound = false

    Array.from(ID).forEach(letter => {
        letterCounts[letter] ? letterCounts[letter]++ : letterCounts[letter] = 1
    })

    for (const value of Object.values(letterCounts)) {
        if (value === 2 && !isTwoTimesFound) {
            counts.exactlyTwoTimesAppearingCount++
            isTwoTimesFound = true
        } else if (value === 3 && !isThreeTimesFound) {
            counts.exactlyThreeTimesAppearingCount++
            isThreeTimesFound = true
        }
    }
}

const checkSum = counts.exactlyTwoTimesAppearingCount * counts.exactlyThreeTimesAppearingCount

console.log(checkSum)