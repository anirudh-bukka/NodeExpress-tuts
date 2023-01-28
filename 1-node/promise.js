let prom = new Promise((resolve, reject) => {
    let a = 1 + 3
    if (a==2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// How to actually interact with promises.
prom.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if(userWatchingCatMeme) {
//         errorCallback({
//             name: 'User is watching Cat memes',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })

const hasExams = true;
const playBall = false;

function isPlayingCallback(callback, errorCallback) {
    if(hasExams && playBall) {
        errorCallback({
            name: 'Kid is playing bball in spite of exams',
            message: '`o`'
        })
    } else if(!hasExams && playBall) {
        callback('Play well, exams over!!')
    } else if(hasExams && !playBall) {
        callback('studying, all the best')
    }
}

isPlayingCallback((mes) => {
    console.log('SUCCESS: ' + mes)
}, (error) => {
    console.log('ERROR: ' + error.name + ' ' + error.message)
})

// ---------------------------------

function isPlayingPromise() {
    return new Promise((resolve, reject) => {
        if(hasExams && playBall) {
            reject({
                name: 'Kid is playing bball in spite of exams',
                message: '`o`'
            })
        }
        else if (!hasExams && playBall) {
            resolve('Play well, exams over!!')
        }
        else if(hasExams && !playBall) {
            resolve('studying, all the best')
        }
    })
}

isPlayingPromise().then((message) => {
    console.log('SUCCESS: ' + message)
}).catch((error) => {
    console.log('ERROR: ' + error.name + ' ' + error.message)
})