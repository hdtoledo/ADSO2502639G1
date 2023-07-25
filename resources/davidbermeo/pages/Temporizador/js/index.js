let inter = null;

function iniciar(){
    let minutos = document.
        getElementById("minutos").valvue;
    let segundos = minutos * 60;
    
    if(inter != null){
        clearInterval(inter);
    }
    inter = setInterval(function(){
        let min;
        if(Math.trunc(segundos/60) < 10)
        {
            min = "0" + Math.trunc(
                segundos/60);
        }
        else{
            min = Math.trunc(segundos/60
            );
        }
        let seg;
        if(segundos%60 < 10){
            seg = "0" + segundos%60;
        }
        else{
            seg = segundos%60;
        }

        document.getElementById("temporizador").innerHTML = min + ":" + seg;       
        if(segundos == 0){
            clearInterval(inter);
        }
        segundos--;
    }, 1000);
}

function detener(){
    if(inter != null){
        clearInterval(inter);
    }
}