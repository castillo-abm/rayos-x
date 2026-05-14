const slider=document.getElementById("slider");
const xray=document.getElementById("xray");

slider.addEventListener("input", ()=>{
    xray.style.opacity=slider.value/100;
});