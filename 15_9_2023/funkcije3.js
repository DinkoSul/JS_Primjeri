function vratiNesto(x) {
  return function () {
    return x;
  };
}

var y = vratiNesto(true);
