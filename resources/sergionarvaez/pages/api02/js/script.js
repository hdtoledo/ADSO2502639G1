const btn = document.querySelector(".btn");
const txtDeslizar = document.querySelector(".frase")
btn.addEventListener("click", getData);

async function getData(){
    try{
        const data = await fetch("https://api.chucknorris.io/jokes/random");
        const json = await data.json();
        /*console.log(json);
        console.log(json.value);*/
        txtDeslizar.textContent = json.value;
    }
    catch(e){
        console.error(e);
    }
    
}
