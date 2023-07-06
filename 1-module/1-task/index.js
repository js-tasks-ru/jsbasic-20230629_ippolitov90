function factorial(n) { 
       let b = 1; 
       if(n >=  0)
       for (let i = 1; i <= n; i++) 
         b = b * i;  
   alert(b);
 }
 factorial(0);
 factorial(1);
 factorial(3);
 factorial(5);