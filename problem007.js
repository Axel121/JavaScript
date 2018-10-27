function findMax(a)
{
  var i =0;
  var max =arguments[0];
  for(i=0;i<arguments.length;i++)
    {
      if(max<arguments[i])
        {
          console.log(max+" i "+arguments[i]);
          max =arguments[i];
         
        }
    }
  console.log("max to"+max);
  return max;
}