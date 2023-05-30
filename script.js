const texto=document.querySelector(".texto");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado=encriptarF(texto.value);
    mensaje.value=textoEncriptado;
    texto.value="";
    mensaje.style.backgroundImage="none";
}
function btnDesencriptar(){
    const textoDesencriptado=desencriptarF(texto.value);
    mensaje.value=textoDesencriptado;
    texto.value="";
}

function encriptarF(stringE){
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringE=stringE.toLowerCase();
    for(i=0;i<matriz.length;i++){
        if (stringE.includes(matriz[i][0])){
            stringE=stringE.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringE
  
}

function desencriptarF(stringD){
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringD=stringD.toLowerCase();
    for(i=0;i<matriz.length;i++){
        if (stringD.includes(matriz[i][1])){
            stringD=stringD.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return stringD

}

    

function copiarF(){ 
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
}


