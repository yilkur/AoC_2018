const fs = require('fs')

const data = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map(Number)

let seenFrequencies = new Map()
let currentFrequency = 0

const isDuplicate = (frequency, frequencyMap) => frequencyMap.has(frequency)

let idx = 0
let noDuplicateFound = true

while (noDuplicateFound) {
  currentFrequency += data[idx]

  if (isDuplicate(currentFrequency, seenFrequencies)) {
    noDuplicateFound = false
  } else {
    seenFrequencies.set(currentFrequency)
  }

  idx = (idx + 1) % data.length
}

const duplicate = currentFrequency
console.log('DUPLICATE', duplicate)