function filter() {
  var j = -1;
  for (var i = 1; i < arguments.length; i++) {
    j = arguments[0].indexOf(arguments[i]);
    if (j > -1) {
      arguments[0].splice(j, 1);
    }
  }
  return arguments[0];
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 3, 5));
