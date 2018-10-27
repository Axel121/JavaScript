function stringRotate(a, b)
{
 var pusty ='';
 
  if(b<0 || isNaN(b))
  { 
    return pusty;
  }
  else
  {
    var result = a.substr(b) + a.substr(0, b)
	return result
  }
}
console.log(stringRotate('UniwersytetSlaski', -2));
