const kits = ["kick","tom","crash","snare"];
const containerEL = document.querySelector(".container");

kits.forEach((kit)=>{
    const btnEL = document.createElement("button");
    btnEL.classList.add("btn");
    containerEL.appendChild(btnEL);
    btnEL.innerHTML = kit;
    btnEL.style.backgroundImage = `url(images/${kit}.png)`;
    const audioEL = document.createElement("audio");
    audioEL.src = `sounds/${kit}.mp3`;
    containerEL.appendChild(audioEL);

    btnEL.addEventListener("click", () =>{
        audioEL.play();
    })

    document.addEventListener("keydown",(e)=>{
        if(e.key === kit.slice(0,1)){
            audioEL.play();
            btnEL.style.transform = "scale(0,9)";
        }
        setTimeout(() => {
            btnEL.style.transform = "scale(1)";
        }, 100);
    })
});