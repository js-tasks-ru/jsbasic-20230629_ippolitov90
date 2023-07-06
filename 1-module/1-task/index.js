alert(factorial(0));
alert(factorial(1));
alert(factorial(3));
alert(factorial(5));
function factorial(n) { 
      let b = 1; 
      
    if(n === 0)
        return 1;
    for (let i = 1; i <= n; i++) 
        b = b * i;  
  return b;
}
