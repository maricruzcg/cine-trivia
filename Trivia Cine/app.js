const inputName = document.getElementById("input-name");
const buttonName = document.getElementById("button-name");
const content = document.getElementById("content");
const sectionApppear = document.getElementById("section-appear");
const primerSection = document.getElementById("primer-section");
const buttonFantasy = document.getElementById("button-fantasy");
const buttonTerror = document.getElementById("button-terror");
const cuestionOneFantasy = document.getElementById("cuestion1-fantasy");
const cuestionOneTerror = document.getElementById("cuestion1-terror");

const getName = () =>{
  primerSection.classList.add("desappear");
  sectionApppear.classList.remove("desappear");
  content.innerHTML = "¡Hola! " + inputName.value

}
const getCuestionFantasy = () =>{
  cuestionOneFantasy.innerHTML = "1. ¿En qué año se estreno la película La historia sin fin?" + "<br/>A. 1987 " + "<br/>B. 2008" + "<br/>C. 1990"

}

const getCuestionTerror = () =>{
  cuestionOneTerror.innerHTML = "1. ¿Cuál de estas películas pertenece al género de Terror?" + "<br/>A. Monster Inc. " + "<br/>B. Child's Play" + "<br/>C. Frankewinie"
}

buttonTerror.addEventListener("click", getCuestionTerror)
buttonFantasy.addEventListener("click", getCuestionFantasy)
buttonName.addEventListener("click", getName)
