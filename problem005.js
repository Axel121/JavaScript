function strangeSum(a, b)
{
  var wynik;
  var wynik1;
  
    if(Number.isInteger(a)&&Number.isInteger(b))
      {
        if(a===b)
        {
          wynik =(a+b)*3;
          return wynik;
        }
        else
        {
          wynik1 = a+b;
          return wynik1;
        }
      }
  else
    {
      return null;
    }
}

