
let letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


let palabras=["codigo", "fuente", "obrero", "ventana", "botella"]

let aleatorio= palabras[Math.floor(Math.random() * palabras.length)]

let cadenapalabra=aleatorio.split('')

let mostrar= document.querySelector(".container")

let separaCaracteres=(aleatorio.split(''))


let conGuion=document.querySelector(".guion")


let muestraContador=document.querySelector(".contador")

let contador= 7
muestraContador.innerHTML=contador


let botonContinuar=document.querySelector(".continue-loose")
botonContinuar.addEventListener("click",buttonContinueLose)

let botonSalir=document.querySelector(".salir")
botonSalir.addEventListener("click",buttonEscape)

console.log(aleatorio)
console.log(cadenapalabra)
let abc=document.createElement("div-a")


for(let i=0;i<separaCaracteres.length;i++){
    separaCaracteres[i]="_ "
    conGuion.innerHTML=separaCaracteres.join("")
}


function resetKeyboard () {


    // Reiniciamos el contendor para borrar el teclado de la partida anterior
    let container = document.querySelector(".container")
    container.innerHTML = ''


    // Vuelvo a pintar las letras de la forma original
    letras.forEach((letra) => {
        let abc=document.createElement("div-a")
       
        abc.style.background="white"
        abc.style.height="30px"
        abc.style.width="30px"
        abc.innerHTML=letra
        abc.style.textAlign="center"
        abc.style.margin="5px"
        abc.style.padding="3px"
        abc.style.border="3px solid #753C40"
        abc.style.borderRadius = "25px";
        abc.style.fontFamily = "Carter One";
        abc.style.fontSize = "x-large";
        mostrar.appendChild(abc)
        //abc.addEventListener("click",clickOnLetter)
    })
}

function clickOnLetter () {
    console.log('HAGO CLICK EN LA LETRA')
}


function cuadrado(infoLetter){
   

    let letterPropieties=infoLetter.srcElement.outerText
    conGuion.innerHTML=letterPropieties
        // En eventInfo viene la info de la letra
        // La variable letra es la letra pulsada (a, z, h...)
        // En vez de la variable letra, tendremos que saber la letra que ha pulsado con la info del evento
    console.log(infoLetter,"SFDC")
    console.log(letterPropieties)

    muestraContador.innerHTML=contador=contador-1

    if(contador===0){
        //ojo al selector de modal-container
    document.querySelector(".modal-container-lose").style.display="block"
    document.querySelector(".container").style.opacity="20%"
    document.querySelector(".guion").style.opacity="20%"
     
    }

    interruptor=false

    for(let i=0;i<cadenapalabra.length;i++){
        
     
        if(letterPropieties===cadenapalabra[i]){
            interruptor=true
            abc.style.background="green"
    
            break;
        }
        abc.style.background="red"
       
    }

   // separaCaracteres[i]= "_ "

    for(let i=0;i<cadenapalabra.length;i++){


       if(letterPropieties===cadenapalabra[i]){
        separaCaracteres[i]=letterPropieties
       }

        console.log(separaCaracteres[i])
        conGuion.innerHTML=separaCaracteres.join("")
    }


    if(JSON.stringify(cadenapalabra) === JSON.stringify(separaCaracteres)){
        
        document.querySelector(".modal-container-win").style.display="block"
        document.querySelector(".container").style.opacity="20%"
        document.querySelector(".guion").style.opacity="20%"

    }

     console.log(separaCaracteres,"separa caracteres")
    }



letras.forEach((letra)=>{
    
    
    let abc=document.createElement("div-a")
  
    abc.style.background="white"
    abc.style.height="30px"
    abc.style.width="30px"
    abc.innerHTML=letra
    abc.style.textAlign="center"
    abc.style.margin="5px"
    abc.style.padding="3px"
    abc.style.border="3px solid #753C40"
    abc.style.borderRadius = "25px";
    abc.style.fontFamily = "Carter One";
    abc.style.fontSize = "x-large";
    mostrar.appendChild(abc)
    abc.addEventListener("click",cuadrado)
    
   

  
})

// 2 FUNCIONES DISTINTAS PARA PERDER Y PARA GANAR CUANDO LE DAMOS A CONTINUAR

function removeModalLose () {
    document.querySelector(".modal-container-lose").style.display="none"
    document.querySelector(".container").style.opacity="100%"
    document.querySelector(".guion").style.opacity="100%"
}

function resetPanel () {
    let aleatorio= palabras[Math.floor(Math.random() * palabras.length)]
    let conGuion=document.querySelector(".guion")
    let separaCaracteres=(aleatorio.split(''))
    for(let i=0;i<separaCaracteres.length;i++){
        separaCaracteres[i]="_ "
        conGuion.innerHTML=separaCaracteres.join("")
    }
}

function buttonContinueLose(){

    console.log('SE EJECUTA AL PERDER')
     // Se reinicie el contador a 7
    contador = 7
    muestraContador.innerHTML = contador

    // Que se quite el modal de continuar
    removeModalLose()

    // Que las letras que pulsamos se vuelvan del color original
    // Que las letras tengan la funcionalidad (ESTO LO ULTIMO)
    resetKeyboard()

    

     // Se pinte el panel con barras bajas

     resetPanel()
     

    // Salga una palabra random

   

}

function buttonEscape(){

document.querySelector(".modal-container-despedida").style.display="block"
    


}








/*let mostrar= document.querySelector(".container")

let letraA=document.createElement("div-a")

letraA.style.background="yellow"
letraA.style.height="40px"
letraA.style.width="40px"
letraA.innerHTML="A"
letraA.style.textAlign="center"
letraA.style.margin="10px"

mostrar.appendChild(letraA)
letraA.addEventListener("click",cuadroA)


function cuadroA(){

    letraA.style.background="red"

}
let letraB=document.createElement("div-b")

letraB.style.background="yellow"
letraB.style.height="40px"
letraB.style.width="40px"
letraB.innerHTML="B"
letraB.style.textAlign="center"
letraB.style.margin="10px"


mostrar.appendChild(letraB)
letraB.addEventListener("click",cuadroB)

function cuadroB(){

    letraB.style.background="red"

}*/