
module.exports = function (map, last) {
  var ended = false
  return function (read) {
    return function (abort, cb) {
      if(ended) return cb(true)
      read(abort, function (end, data) {
        if(end === true) {
          ended = true
          cb(null, last())
        }
        else if(end) //error, just stop.
          cb(ended = end)
        else
          cb(null, map(data))
      })
    }
  }
}


