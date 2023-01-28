const { writeFileSync } = require('fs')

for(let i = 0; i < 100; i++) {
    writeFileSync('./content/big.txt', `Appended ${i+1} times yet.\n`, { flag: 'a' })
}