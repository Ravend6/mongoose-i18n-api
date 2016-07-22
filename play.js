require('crypto').randomBytes(16, function (err, buffer) {
  var token = buffer.toString('hex')
  console.log(token)
})

const buf = require('crypto').randomBytes(16)
console.log(buf.toString('hex'))
