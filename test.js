var assert = require('assert')
var pull = require('pull-stream')
var MapLast = require('./')
pull(
  pull.values([1,2,3]),
  MapLast(function (e) {
    return e * 10
  },
  function () {
    return 0
  }),
  pull.collect(function (err, ary) {
    if(err) throw err
    assert.deepEqual(ary, [10,20,30,0])
    console.log('passed')
  })
)
