
const arc = require('@architect/functions')

exports.handler = arc.events.subscribe(function (payload) {
  console.log('HELLO EVENT!!!', payload)
})
