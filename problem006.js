function divisible(a)
{
  var isDivide = true;
  var i =0;
  var first =arguments[0];
  for(i=0;i<arguments.length;i++)
    {
      if((first%arguments[i])===0)
        {
           console.log("tak");
        }
      else
        {
          isDivide =false;
        }
 
    }
  return isDivide;  
}