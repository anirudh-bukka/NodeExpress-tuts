console.log('first to execute')
setTimeout(() => {
    console.log('ideally SECOND, but last')
}, 0)
console.log('ideally THIRD, but before callbacks/timeouts')