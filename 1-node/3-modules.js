// CommonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names') // or const { john, peter } = require('./4-names')
// console.log(names)

const funcCall = require('./5-utils')

funcCall('susan')
funcCall(names.john)
funcCall(names.peter)


// const data = require('./6-alternative-flavor')

// console.log(data)

require('./7-mind-grenade')