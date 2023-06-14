var typed = new Typed('.typed', {
	strings: [
		'Programador Web'
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

let circularProgressList = $(".circular-progress");
let progressValueList = $(".progress-value");
let progressStartValue = 0;
// progressEndValue = $(progressValue).attr('valor'),    
let speed = 10;


$(document).ready(function () {
	let menu = $('.nav-element');
	let content = $('.main-content');

	function limpiarNav(){
		for(i = 0; i < 4; i++){
			$(menu[i]).removeClass('active');
			$(content[i]).removeClass('show');
			$(content[i]).addClass('hidden');
		}
	}

	$('#nav-sobre-mi').on('click', function () {
		for(i = 0; i < 4; i++){
			let circularProgress = circularProgressList[i];
			let progressValue = progressValueList[i];
			let progressEndValue = $(progressValue).attr('valor');

			let progress = setInterval(() => {
				progressStartValue++;
				
				console.log(progressStartValue);
				
				progressValue.textContent = `${progressStartValue}%`
				circularProgress.style.background = `conic-gradient(#f8aa4b ${progressStartValue * 3.6}deg, #54d2d2 0deg)`
				if(progressStartValue == progressEndValue){
					clearInterval(progress);
					progressStartValue = 0;
				}    
				}, speed);

		}
	});

	$('.nav-element').on('click', function () {
		limpiarNav();
		$(this).addClass('active');
		let navContent = $(this).attr('valor');
		$('#'+navContent).addClass('show');
	});
});