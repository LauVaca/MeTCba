function validarFormulario()
{
	let validar = true;

	let campoNombre = document.querySelector(".inombre");
	let nombre = campoNombre.value;

	let campoApellido = document.querySelector(".iapellido");
	let apellido = campoApellido.value;

	let campoMail = document.querySelector(".imail");
	let mail = campoMail.value;

	let campoTelefono = document.querySelector(".itelefono");
	let telefono = campoTelefono.value;

	let campoConsulta = document.querySelector(".tconsulta");
	let consulta = campoConsulta.value;

	if (nombre === ""){
		alert("El campo nombre esta vacio.");
		validar = false;
		return
	}

	if (apellido === ""){
		alert("El campo apellido esta vacio.");
		validar = false;
		return
	}

	if (mail === ""){
		alert("El campo mail esta vacio.");
		validar = false;
		return
	}

	if (telefono === ""){
		alert("El campo telefono esta vacio.");
		validar = false;
		return
	}

	if (consulta === ""){
		alert("El campo consulta esta vacio.");
		validar = false;
		return
	}

	if (validar === true){
		alert("Su formulario se envio correctamente");
	}

}
