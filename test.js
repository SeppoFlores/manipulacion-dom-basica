let alumno = {
	nombre: 'Juan',
	apellido: 'Perez',
	username: 'Juaniquilador',
	edad: 19,
	email: 'juaniquilador@gmail.com',
	ahorro: 20000,
	deudas: 5000,
	mayoriaDeEdad: function() {
		adult = this.edad >= 18;
		return adult
	},
	nombreCompleto: function() {
		return `${this.nombre} ${this.apellido}`
	},
	dineroReal: function() {
		total = this.ahorro - this.deudas;
		return total
	}
};

alumno.nombreCompleto();
alumno.dineroReal();

// Variables

saludo =  function (name, lastName, nickname) {
	completeName = name + lastName;
	console.log(`Mi nombre es ${completeName} pero prefiero que me digas ${nickname}`);
}

saludo('Juan', 'Perez', 'Juaniquilador');

// Condicionales

let estudiante = {
	nombre: 'Juan',
	apellido: 'Perez',
	username: 'Juaniquilador',
	edad: 19,
	email: 'juaniquilador@gmail.com',
	ahorro: 20000,
	deudas: 5000,
	tipoDeSuscripcion: "Basic",
	mayoriaDeEdad: function() {
		adult = this.edad >= 18;
		return adult
	},
	nombreCompleto: function() {
		return `${this.nombre} ${this.apellido}`
	},
	dineroReal: function() {
		total = this.ahorro - this.deudas;
		return total
	}
};

if (estudiante.tipoDeSuscripcion === "Free") {
	console.log("Solo puedes tomar los cursos gratis");
} else if (estudiante.tipoDeSuscripcion === "Basic") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (estudiante.tipoDeSuscripcion === "Expert") {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (estudiante.tipoDeSuscripcion === "ExpertPlus") {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Condicionales 2

function conseguirTipoSuscripcion (suscripcion) {
	if (suscripcion == 'Free') {
		console.log("Solo puedes tomar los cursos gratis");
		return;
	}
	if (suscripcion == 'Basic') {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
		return;
	}
	if (suscripcion == 'Expert') {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
		return;
	}
	if (suscripcion == 'ExpertDuo') {
		console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
		return;
	}
	console.warn('Ese tipo de suscripcion no existe')
}

// Condicionales BONUS
const tipoDeSuscripciones = {
	free: "Solo puedes tomar los cursos gratis",
	basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
	expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
	expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

// se puede acceder a las propiedades de los objetos con nombreDelObjeto['propiedadDelObjeto']
// o creando una variable const nombreVariable = 'propiedadDelObjeto'
// y pasando la variable como argumento nombreDelObjeto['nombreVariable']
function conseguirTipoSuscripciones(suscripcion) {
	if(tipoDeSuscripciones[suscripcion]) {
		console.log(tipoDeSuscripciones[suscripcion]);
		return;
	}
	console.warn('Ese tipo de suscripción no existe')
}


//Ciclos
let i = 0;

while (i < 5) {
	console.log(`El valor de i es: ${i}`);
	i++;
}

while (i >= 2) {
	console.log(`El valor de i es: ${i}`);
	i--;
}

let respuesta;

while (respuesta != '4') {
	let pregunta = prompt('¿Cuánto es 2 + 2?');
	respuesta = pregunta;
}

// Listas

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let array = ['1', '2', '3', '4', '5']
let array2 = ['6', '7', '8', '9', '10']

let cliente = {
	nombre: 'Juan',
	apellido: 'Perez',
	username: 'Juaniquilador',
	edad: 19,
	email: 'juaniquilador@gmail.com',
	ahorro: 20000,
	deudas: 5000,
	mayoriaDeEdad: function() {
		adult = this.edad >= 18;
		return adult
	},
	nombreCompleto: function() {
		return `${this.nombre} ${this.apellido}`
	},
	dineroReal: function() {
		total = this.ahorro - this.deudas;
		return total
	}
};

let printFirst = function (arreglo) {
	console.log(arreglo[0]);
};

let printOneByOne = function (arreglo2) {
	length = arreglo2.length;
	while (length > 0) {
		length--;
		console.log(arreglo2[length]);
	}
};

let imprimirElementoPorElementoObjeto = function (obj) {
	const arr = Object.values(obj);
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};