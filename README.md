# pull-map-last

Like pull-stream/throughs/map except also takes a function to be called when the source ends.

Used to create streams that map 1:1 with input, but also need a special case for the end of the stream.

## Example

``` js
pull(
  source...,
  MapLast(function each (data) {
    return the transformed item...
  }, function () {
    return last item...
  }),
  ...sink
)

```


## License

MIT
