const { readFile, writeFile } = require('fs')

console.log('Started a first task')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})
console.log('Starting next task')

// We are just grabbing the code from the file, but the file is inside another folder.
// But if we run nodemon and then directly the filename (which is in the event loop), the path won't match.
// This path matches only because we have app.js