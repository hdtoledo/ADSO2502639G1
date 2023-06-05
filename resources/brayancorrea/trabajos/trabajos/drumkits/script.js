const kits = ["kick", "tom", "crash", "snare"] ;
const containerEl = document.querySelector(".container")

kits.forEach((kit)=>{
    const btnEL = document.createElement("button");
    btnEL.classList.add("btn");
    containerEl.appendChild(btnEL);
    btnEL.innerText = kit
    btnEL.style.backgroundImage = `url(images/${kit}.png)`
    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    containerEl.appendChild(audioEl);

        btnEL.addEventListener("click", ()=>{
            audioEl.play()
        })
    document.addEventListener("keydown", (e)=> {
        if(e.key === kit.slice(0,1)){
            audioEl.play();
            btnEL.style.transform = "scale(0,9)";

        }
        setTimeout(() => {
            btnEL.style.transform="scale(1)";

        }, 100);
    })

}
)