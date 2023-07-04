const cursorAni = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove",movement);

function movement(e){
    console.log("moving")
        let x = e.pageX;
        let y = e.pageY;
        cursorAni.style.left = x + "px";
        cursorAni.style.top = y + "px";
        cursorAni.style.display = "block"

        clearTimeout(timeout)
        timeout = setTimeout(() => {
        cursorAni.style.display = "none"
        }, 2000);
}

document.addEventListener("mouseout",()=>{
    cursorAni.style.display = "none"
})