var btnE = document.querySelector(".botonE");
var btnD = document.querySelector(".botonD");
var mono = document.querySelector(".monito");
var contenedor = document.querySelector(".cajaParrafo");
var resultado = document.querySelector(".resultadoDeTexto");


btnE.onclick = encriptar;
btnD.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var texto1 = recuperarTexto()
    resultado.textContent = encriptarTexto(texto1);
}

function desencriptar(){
    ocultarAdelante();
    var texto1 = recuperarTexto()
    resultado.textContent = desencriptarTexto(texto1);
}

function recuperarTexto(){
    var texto1 = document.querySelector(".texto1")
    return texto1.value
}

function ocultarAdelante(){
    mono.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

    function desencriptarTexto(mensaje){
        var texto = mensaje;
        var textoFinal = "";

        for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoFinal = textoFinal + "a"
                i = i+1;
            }
            else if(texto[i] == "e"){
                textoFinal = textoFinal + "e"
                i = i+4;
            }
            else if(texto[i] == "i"){
                textoFinal = textoFinal + "i"
                i = i+3;
            }
            else if(texto[i] == "o"){
                textoFinal = textoFinal + "o"
                i = i+3;
            }
            else if(texto[i] == "u"){
                textoFinal = textoFinal + "u"
                i = i+3;
            }
            else{
                textoFinal = textoFinal + texto[i];
            }
        }
        return textoFinal;
    }

    const btnC = document.querySelector(".botonC");
        btnC.addEventListener("click", copiar = () => {
            var contenido = document.querySelector(".resultadoDeTexto").textContent;
            navigator.clipboard.writeText(contenido);
            console.log("hola");
        });
        