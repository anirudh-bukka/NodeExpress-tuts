const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (error, data) => {
            if(error) {
                reject(error)
                return;
            } else {
                resolve(data)
            }
        })
    })
}

const start = async() => {
    try {
        const first = await getText('./content/first.txt')
        console.log(first)
    } catch(error) {
        console.log(error)
    }
}

start()