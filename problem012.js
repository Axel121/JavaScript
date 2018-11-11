function objectsDiff(a, b) {
  var tab = [];
  var f = true;
  for(var propertys in a){
    f = true;
    for(var propertys2 in b){
      if(propertys == propertys2){
        f = false;
        break;
      }
    }
    if(f){
      tab.push(propertys);
    }
  }

  for(var propertys in b){
    f = true;
    for(var propertys2 in a){
      if(property == propertys2){
        f = false;
        break;
      }
    }
    if(f){
      tab.push(propertys);
    }
  }

  return tab;
}