$().ready(function() {
	$("#mi-formulario").validate({
		rules: {
			correo: {
				required: true,
				email: true
				},
			run: {
				required: true,
				minlength: 7,
				maxlength: 8
				},
			digitoVerificador: {
				required: true,
				maxlength: 1
				},
			nombre: {
				required: true
				},
			nacimiento: {
				required: true
				},
			telefono: {
				required: true
				},
            region: {
				required: true
				},
            ciudad: {
				required: true
				},
            vivienda: {
				required: true
				}
			},
		messages: {
			correo: "Debes ingresar un Correo Electrónico válido"
				,
			run: {
				required: "Debes completar tu Run",
				minlength: "Tu Run debe tener al menos 7 caracteres",
				maxlength: "Tu Run debe tener máximo 8 caracteres"
				},
			digitoverificador: {
				required: "Debes ingresar el digito Verificador de tu Run",
				maxlength: "Debes ingresar sólo 1 caracter"
				},
			nombre: {
			    required: "Debes ingresar tu nombre completo"
				},
			nacimiento: {
				required: "Debes ingresar tu fecha de nacimiento"
				},
			telefono: {
				required: "Debes ingresar tu n° de teléfono"
				},
            region: {
				required: "Debes seleccionar tu Región"
				},
            ciudad: {
				required: "Debes seleccionar tu Ciudad"
				},
            vivienda: {
				required: "Debes seleccionar tu tipo de Vivienda"
				}
			}
		})
	});