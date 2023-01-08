const fs = require('fs')

const data = fs
    .readFileSync('input.txt', { encoding: 'utf-8' })
    .split('\n')
    .map(Number)

const resultFrequency = data.reduce((acc, val) => acc + val, 0)

console.log(resultFrequency)