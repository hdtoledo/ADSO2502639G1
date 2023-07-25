const kits = [ "kick", "tom", "crash", "snare"];
const containerEL = document.querySelector(".container")

kits.forEach((kit) =>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn")
    containerEL.appendChild(btnEl);
    btnEl.innerText = kit
    btnEl.style.backgroundImage= `url(img/${kit}.png)`
    const audioEl = document.createElement("audio")
    audioEl.src =`audios/${kit}.mp3`
    containerEL.appendChild(audioEl)

    btnEl.addEventListener("click", () =>{
        audioEl.play()
    })



    //El sonido lo poremos reproducir co las iniciales de nuestros sonidos. Letras k - t - c -s
    document.addEventListener("keydown",(e) =>{
        if(e.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(0,9)"
        }
        setTimeout(() =>{
            btnEl.style.transform = "scale(1)"
        }, 100);
    })

});

