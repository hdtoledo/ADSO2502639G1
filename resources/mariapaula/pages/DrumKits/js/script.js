const kits = ["kick", "tom", "crash", "snare"];
const containerEl = document.querySelector(".container")

kits.forEach((kit)=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    containerEl.appendChild(btnEl);
    btnEl.innerText = kit
    btnEl.style.backgroundImage = `url(img/${kit}.png)`
    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    containerEl.appendChild(audioEl);

    btnEl.addEventListener("click", ()=>{
        audioEl.play()
    })

    // El sonido lo podremos reproducir con las iniciales de nuestros sonidos. letras k-t-c-s
    document.addEventListener("keydown", (e)=>{
        if(e.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(0.9)";
        }
        setTimeout(()=>{
            btnEl.style.transform = "scale(1)";
        }, 100);
    })
})