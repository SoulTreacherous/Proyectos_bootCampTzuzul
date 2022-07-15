/* Aqui me ayudo el prof. de Coding Fundamentals. No le entendi mucho, porque aun no domino JS */

const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
	contenedor.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth <= 978){
		contenedor.classList.remove('active');
	} else {
		contenedor.classList.add('active');
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	//Se vuelve a llamar para verificar (Si ya estaba o no.)
	comprobarAncho();
});