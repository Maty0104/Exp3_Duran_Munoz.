const form =document.querySelector('#form')

const nombre = form.nombre
const apellidopaterno = form.apeP
const apellidomaterno =form.apeM
const genero = form.sexo
const rut= form.rut
const dirección=form.dirección
const correo=form.correo
const teléfono=form.teléfono
const terminos=form.terminos

let errors = document.querySelector('#errors')

form.addEventListener('submit', validar)

function validar(e){
    errors.innerHTML=''
    validarNombres(e)
    validarApellidopaterno(e)
    validarApellidomaterno(e)
    validarGenero(e)
    validarRut(e)
    validarDirección(e)
    validarCorreo(e)
    validarTeléfono(e)
    validarTerminos(e)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function validarNombre(e) {
    const nombre = document.getElementById('nombre').value;
    const errors = document.getElementById('errors');
    errors.style.display = 'none';
    errors.innerHTML = '';
  
    if (nombre === '' || nombre === null) {
      errors.style.display = 'block';
      errors.innerHTML += '<li>Ingrese un Nombre</li>';
      e.preventDefault();
    } else {
      if (nombre.length < 3) {
        errors.style.display = 'block';
        errors.innerHTML += '<li>Nombre inválido</li>';
        e.preventDefault();
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function validarApellidopaterno(e) {
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const errors = document.getElementById('errors');
    errors.style.display = 'none';
    errors.innerHTML = '';
  
    if (apellidoPaterno === '' || apellidoPaterno === null) {
      errors.style.display = 'block';
      errors.innerHTML += '<li>Ingrese Apellido Paterno</li>';
      e.preventDefault();
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarApellidomaterno(e) {
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const errors = document.getElementById('errors');
    errors.style.display = 'none';
    errors.innerHTML = '';
  
    if (apellidoMaterno === '' || apellidoMaterno === null) {
      errors.style.display = 'block';
      errors.innerHTML += '<li>Ingrese Apellido Materno</li>';
      e.preventDefault();
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarGenero(e){
if (sexo[0].checked == false  && sexo[1].checked == 
    false){
        errors.styles.display = 'block'
        errors.innerHTML += '<li>Seleccione sexo</li>'
        e.preventDefault()}    
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarRut(e){
    if (rut.value== '' || rut.value == null){
        errors.styles.display = 'block'
        errors.innerHTML += '<li>Ingrese Rut</li>'
        e.preventDefault()
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarDirección(e) {
    const dirección = document.getElementById('dirección').value;
    const errors = document.getElementById('errors');
    errors.style.display = 'none';
    errors.innerHTML = '';
  
    if (Dirección === '' || dirección === null) {
      errors.style.display = 'block';
      errors.innerHTML += '<li>Ingrese Dirección</li>';
      e.preventDefault();
    } else {
      if (dirección.length < 5) {
        errors.style.display = 'block';
        errors.innerHTML += '<li>Dirección inválida</li>';
        e.preventDefault();
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarCorreo(e){
    if (correo.value== '' || correo.value == null){
        errors.styles.display = 'block'
        errors.innerHTML += '<li>Ingrese Correo</li>'
        e.preventDefault()
    }else{
        if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo.value)){ 

        }else {
        errors.styles.display = 'block'
        errors.innerHTML += '<li>Ingrese Correo</li>'
        e.preventDefault()

        }
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarTeléfono(e) {
    const teléfono = document.getElementById('teléfono').value;
    const errors = document.getElementById('errors');
    errors.style.display = 'none';
    errors.innerHTML = '';
  
    if (teléfono === '' || teléfono === null) {
      errors.style.display = 'block';
      errors.innerHTML += '<li>Ingrese Teléfono</li>';
      e.preventDefault();
    } else {
      if (/^\+(?:[0-9] ?){6,14}[0-9]$/.test(teléfono)) {
       
      } else {
        errors.style.display = 'block';
        errors.innerHTML += '<li>Teléfono inválido</li>';
        e.preventDefault();
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarTerminos(e){
    if (!terminos.checked){
        errors.styles.display = 'block'
        errors.innerHTML += '<li>Acepte terminos</li>'
        e.preventDefault()
    }
}