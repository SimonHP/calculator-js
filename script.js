function myfunctionadd() {
    var first = document.getElementById("fnumber").value;
    var second = document.getElementById("lnumber").value;
    var answer =+first + +second;
  
    var textbox3 = document.getElementById('textbox3');
    textbox3.value = answer;
  }

  function myfunctionminus() {
    var first = document.getElementById("fnumber").value;
    var second = document.getElementById("lnumber").value;
    var answer =+first - +second;
  
    var textbox3 = document.getElementById('textbox3');
    textbox3.value = answer;
  }

  function myfunctionmultiply() {
    var first = document.getElementById("fnumber").value;
    var second = document.getElementById("lnumber").value;
    var answer =+first * +second;
  
    var textbox3 = document.getElementById('textbox3');
    textbox3.value = answer;
  }

  function myfunctiondivide() {
    var first = document.getElementById("fnumber").value;
    var second = document.getElementById("lnumber").value;
    
    if ( first != 0 && second != 0)  
    
       { var answer =+first / +second;
        var textbox3 = document.getElementById('textbox3');
        textbox3.value = answer;}
      else { var textbox3 = document.getElementById('textbox3');
       textbox3.value = "cannot use zero";}
      //  else {(alert ( "cannot use by zero"));}
  }

  function myfunctionmodulo() {
    var first = document.getElementById("fnumber").value;
    var second = document.getElementById("lnumber").value;
    if (first==0 || second ==0){ var textbox3 = document.getElementById('textbox3');
      textbox3.value = "cannot use zero";}
        
    //{(alert ( "cannot divide by zero"));}
      else
      {var answer = +first % +second;
  
      var textbox3 = document.getElementById('textbox3');
      textbox3.value = answer;}
  }
  function myfunctionexponent() {
    var first = document.getElementById("fnumber").value;
    var second = document.getElementById("lnumber").value;
    var answer =Number(first) ** (+second);
  
    var textbox3 = document.getElementById('textbox3');
    textbox3.value = answer;
  }

  function myfunctionprime() {
    var first = document.getElementById("fnumber").value;
    //var second = document.getElementById("lnumber").value;
    //var i = 1
  
    for (let i=2;i < first;i++)
      
      if (first % i == 0)//{(alert ( "not prime"));break}
      {var textbox3 = document.getElementById('textbox3');
        textbox3.value = " not prime";break}
        
        else {//(alert ( "is prime"));break}
        {var textbox3 = document.getElementById('textbox3');
        textbox3.value = "is prime";break}
    
      }
    
    
  


  function reset() {
    document.getElementById('fnumber').value = ''
    document.getElementById('lnumber').value = ''
    document.getElementById('textbox3').value = ''
  }}