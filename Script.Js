
function foco(){                                    // llamo a la funcion foco para controlar el cursor
    
    document.getElementById("InputTexto").focus();
}

function encriptar(){ 
    
    var texto = document.getElementById("InputTexto").value.toLowerCase();  // transforma mayusculas 
    document.getElementById("InputTexto").value = " ";                      // limpio texto de entrada
    var TextoCifrado = texto.replace(/e/igm,"enter");                       // cambia cada letra e por enter
    var TextoCifrado = TextoCifrado.replace(/o/igm,"ober");                 
    var TextoCifrado = TextoCifrado.replace(/i/igm,"imes");
    var TextoCifrado = TextoCifrado.replace(/a/igm,"ai");
    var TextoCifrado = TextoCifrado.replace(/u/igm,"ufat");
    document.getElementById("imgmuneco").style.display = "none";          
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = TextoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "initial";             // toma los valores iniciales del boton
     
}
function desencriptar(){
    var texto = document.getElementById("InputTexto").value.toLowerCase();
    document.getElementById("InputTexto").value = " ";            
    var TextoCifrado = texto.replace(/enter/igm,"e");                  
    var TextoCifrado = TextoCifrado.replace(/ober/igm,"o");
    var TextoCifrado = TextoCifrado.replace(/imes/igm,"i");
    var TextoCifrado = TextoCifrado.replace(/ai/igm,"a");
    var TextoCifrado = TextoCifrado.replace(/ufat/igm,"u");
    document.getElementById("imgmuneco").style.display = "none";          
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = TextoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display= "initial";  

}
function copy(){
    var contenido = document.querySelector("#texto2");   // esta instruccion funciona  con un textarea
    contenido.select();
    document.execCommand("copy");
   
    Swal.fire(                             // utilizo mensaje customizado
        'El Mensaje',
        'fue copiado con exito',
        'success'
        
      )
   
}
