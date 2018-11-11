function deepFindAndCount(a, b) {
  var tab = JSON.stringify(a);
  var d = new RegExp(b,'g');
  var counter = (tab.match(d) || []).length;
  return counter 
}