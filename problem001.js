function triangleArea(a, b, c)
{
    var daSie = true;
    var zakres = Math.pow(10,2)
    var nie = -1;
   function czyDaSie(a,b,c)
  {
    if(a+b<c|| a + c < b || c + b < a)
      {
        daSie = false;
      }  
  }

    czyDaSie(a,b,c);
    if(daSie)
     {
      var p=(a+b+c)/2;    
      var wynik = Math.sqrt((p*(p-a)*(p-b)*(p-c) ));
      var wynikOst =  (Math.round(wynik*zakres)/zakres);
      console.log(wynikOst)
      return wynikOst;
     }
  if(daSie===false)
    {
      return nie;
    }
 
}