const btn = document.getElementById("btn");
const rayo = document.getElementById("rayo");
const xray = document.getElementById("xray");
const flash = document.getElementById("flash");

let animando = false;

btn.addEventListener("click", () => {

    if (animando) return;
    animando = true;

    // reset
    rayo.style.transition = "none";
    rayo.style.right = "-300px";
    rayo.style.opacity = "1";

    xray.style.opacity = "0";
    flash.style.opacity = "0";

    void rayo.offsetWidth;

    //SOLO dentro de la mitad
    rayo.style.transition = "right 0.9s ease, opacity 0.4s ease";
    rayo.style.right = "0px";

    // flash
    setTimeout(() => {
        flash.style.opacity = "1";
    }, 700);

    // RX aparece
    setTimeout(() => {
        xray.style.opacity = "1";
        flash.style.opacity = "0";
    }, 900);

    //rayo desaparece
    setTimeout(() => {
        rayo.style.opacity = "0";
    }, 1100);

    setTimeout(() => {
        xray.style.opacity = "0";
        animando = false;
    }, 1800);

});
