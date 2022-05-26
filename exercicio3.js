var btn = document.querySelector('#clicker')
var lamp  = document.querySelector('#lamp')
btn.onclick=function() {
      if(btn.value === 'Acender'){
        alert('Alexa, acender lampada!')
        lamp.src ='ligada.png';
        btn.value = 'Apagar';
        btn.innerHTML = 'Apagar';
    } else { 
        alert('Alexa, apagar lampada!')      
        lamp.src='apagada.png';
        btn.value='Acender';
        btn.innerHTML='Acender';
    }
}