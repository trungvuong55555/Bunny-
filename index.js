
  window.onload = function () {
    Congratulations();
  };
    
  var congrattext= "I  wish   you   always   happy  :))";
  var pos = 0;
  
  function Congratulations(){
    if(pos < congrattext.length)
    {
      congrat.innerHTML += congrattext[pos];
      pos ++;
      setTimeout(Congratulations, 200);
    }
    else{
        pos = 0;
    };
  }
  

  