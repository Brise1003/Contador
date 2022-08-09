// NEcesito que este contador haga 3 cosas
// Incremente en 1
// Decremente en 1
// Borre la cuenta
// Inicie en 0

let valorContador=0;

function incrementar(){
    valorContador++;
    document.getElementById("contador").innerHTML=valorContador;
}

function decrementar(){
    valorContador--;
    document.getElementById("contador").innerHTML=valorContador;
}

function resetear(){
    valorContador=0;
    document.getElementById("contador").innerHTML=valorContador
}
