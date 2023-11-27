const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputEdad = document.querySelector("#inputEdad")
const inputCiudad = document.querySelector("#inputCiudad")

const btnEnviar = document.querySelector("button#btnEnviar")

function recuperarDatos() {
    let datosFormulario = JSON.parce(localStorage.getItem("datosFormulario"))
    console.log(datosFormulario)
}

function guardarDatos() {
    const datosFormulario = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        edad: inputEdad.value,
        ciudad: inputCiudad.value
    }

    localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario))
}

btnEnviar.addEventListener("click",  guardarDatos)