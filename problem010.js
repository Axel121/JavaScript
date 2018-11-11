function deepCopy(a) {
  var tab = JSON.parse(JSON.stringify(a));
  return tab;
}