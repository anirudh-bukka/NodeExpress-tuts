// const { readFile, writeFile } = require('fs')

// readFile('./content/first.txt', 'utf8', (err, res) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(res)

// })

const { readFile, writeFile } = require('fs')
console.log('START')

readFile('./content/first.txt', 'utf8', (error, result) => {
    if(error) {
        console.log(error)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if(error) {
            console.log(error)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the updated text: \n ${first} ;\t ${second}`, 
            // {flag : 'a'},
            (error, result) => {
                if(error) {
                    console.log(error)
                    return
                }
                console.log(result)
                console.log('DONE WITH THIS TASK')
            }
        )
    })
})

console.log('Starting next task')