//se crean variables que representen a los selectores de los elementos
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
	console.log({event});
	event.preventDefault();
	const sumaInputs = Number(input1.value) + Number(input2.value);
	pResult.innerText = `Resultado: ${sumaInputs}`;
}
// const p = document.querySelector('p');
// const parrafito = document.getElementById('.parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(h1);

// console.log({
// 	h1,
// 	p,
// 	parrafito,
// 	pid,
// 	input
// });

// //Escribiendo HTML desde JavaScript

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Cisne <br>';
// // console.log(h1.getAttribute('class'))
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('azul');
// h1.classList.remove('verde');
// // h1.classList.toggle('verde');
// // h1.classList.contains('verde');

// input.value = "465";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png');
// console.log(img);

// pid.append(img);
// // pid.appendChild(img);