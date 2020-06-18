function safelock(){
  sl = document.getElementById('safelock').value
  dur = document.getElementById('sl_dur').value

  document.getElementById("err").innerHTML = "";
  document.getElementById("sl_tp").innerHTML = "";

  if(sl == '' || dur == ''){
    document.getElementById("err").innerHTML = "Fields cannot be blank.";
  }else{
    cal = (sl*dur*13)/(100*12)
    tp = parseInt(sl)+cal
    document.getElementById("sl_tp").innerHTML = "Your Monthly Interest is: #" +tp.toFixed(2);
    document.getElementById("return").innerHTML = `After ${dur} months your total money would be #${tp.toFixed(2)}`
  }

}


function t_savings(){
  sl = document.getElementById('t_savings').value
  dur = document.getElementById('ts_dur').value

  document.getElementById("err").innerHTML = "";
  document.getElementById("sl_tp").innerHTML = "";

  if(sl == '' || dur == ''){
    document.getElementById("err").innerHTML = "Fields cannot be blank.";
  }else{
    cal = (sl*dur*10)/(100*12)
    tp = parseInt(sl)+cal
    document.getElementById("sl_tp").innerHTML = "Your Monthly Interest is: #" + tp.toFixed(2);
    document.getElementById("return").innerHTML = `After ${dur} months your total money would be #${tp.toFixed(2)}`
  }

}

function piggybank(){
  sl = document.getElementById('piggybank').value
  dur = document.getElementById('pg_dur').value

  document.getElementById("err").innerHTML = "";
  document.getElementById("sl_tp").innerHTML = "";

  if(sl == '' || dur == ''){
    document.getElementById("err").innerHTML = "Fields cannot be blank.";
  }else{
    cal = (sl*dur*10)/(100*12)
    tp = (parseInt(sl)+cal ) - cal
    document.getElementById("sl_tp").innerHTML = "Your Monthly Interest is: #" +tp.toFixed(2);
    document.getElementById("return").innerHTML = `After ${dur} months your total money would be #${tp.toFixed(2)}`
  }

}
`After ${dur} months your total money would be ${tp.toFixed(2)}`