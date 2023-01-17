const textAboutMe = document.getElementById("Text-about-me")
const textHabilidades = document.getElementById("habilidades-text")
const textExperiencia = document.getElementById("experiencias-text")
const textIdiomas = document.getElementById("idiomas-text")
const textContacto = document.getElementById("contacto-text")
const textEstudios = document.getElementById("estudios-text")



document.body.style.backgroundColor = "#FBF1D3";

document.getElementById("click-me").addEventListener("click", function () {
    if (textAboutMe.style.visibility === "visible") {
        textAboutMe.style.visibility = "hidden"
    } else {
        textAboutMe.style.visibility = "visible";
    }

})
document.getElementById("habilidades-titulo").addEventListener("click", function () {
    if (textHabilidades.style.visibility === "visible") {
        textHabilidades.style.visibility = "hidden"
    } else {
        textHabilidades.style.visibility = "visible";
    }

})
document.getElementById("titulo-experiencias").addEventListener("click", function () {
    if (textExperiencia.style.visibility === "visible") {
        textExperiencia.style.visibility = "hidden"
    } else {
        textExperiencia.style.visibility = "visible";
    }

})
document.getElementById("titulo-idiomas").addEventListener("click", function () {
    if (textIdiomas.style.visibility === "visible") {
        textIdiomas.style.visibility = "hidden"
    } else {
        textIdiomas.style.visibility = "visible";
    }

})
document.getElementById("titulo-contacto").addEventListener("click", function () {
    if (textContacto.style.visibility === "visible") {
        textContacto.style.visibility = "hidden"
    } else {
        textContacto.style.visibility = "visible";
    }

})
document.getElementById("titulo-estudios").addEventListener("click", function () {
    if (textEstudios.style.visibility === "visible") {
        textEstudios.style.visibility = "hidden"
    } else {
        textEstudios.style.visibility = "visible";
    }

})