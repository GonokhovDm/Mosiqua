window.onload = function() {
	const mainLoaded = document.querySelector('.main');
	const isLoad = document.querySelector('.loader');
	mainLoaded.classList.add('loaded_hiding');
	window.setTimeout (function() {
		
		isLoad.classList.add('is-load');
		mainLoaded.classList.remove('loaded_hiding');
		mainLoaded.classList.add('loaded');
	}, 1500);
}

//#region AUDIO
let audio1 = document.getElementById("audio-1");
let playBtn1 = document.getElementById("play-btn-1");
let audio2 = document.getElementById("audio-2");
let playBtn2 = document.getElementById("play-btn-2");
let audio3 = document.getElementById("audio-3");
let playBtn3 = document.getElementById("play-btn-3");
let audio4 = document.getElementById("audio-4");
let playBtn4 = document.getElementById("play-btn-4");
let audio5 = document.getElementById("audio-5");
let playBtn5 = document.getElementById("play-btn-5");
let audio6 = document.getElementById("audio-6");
let playBtn6 = document.getElementById("play-btn-6");

var playPause1 = function () {
	if (audio1.paused) {
		audio1.play();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
	} else {
		audio1.pause();
	}
}

var playPause2 = function () {
	if (audio2.paused) {
		audio1.pause();
		audio2.play();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.pause();
	} else {
		audio2.pause();
	}
}

var playPause3 = function () {
	if (audio3.paused) {
		audio1.pause();
		audio2.pause();
		audio3.play();
		audio4.pause();
		audio5.pause();
		audio6.pause();
	} else {
		audio3.pause();
	}
}

var playPause4 = function () {
	if (audio4.paused) {
		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.play();
		audio5.pause();
		audio6.pause();
	} else {
		audio4.pause();
	}
}

var playPause5 = function () {
	if (audio5.paused) {
		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.play();
		audio6.pause();
	} else {
		audio5.pause();
	}
}

var playPause6 = function () {
	if (audio6.paused) {
		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
		audio6.play();
	} else {
		audio6.pause();
	}
}

playBtn1.addEventListener('click', playPause1);
playBtn2.addEventListener('click', playPause2);
playBtn3.addEventListener('click', playPause3);
playBtn4.addEventListener('click', playPause4);
playBtn5.addEventListener('click', playPause5);
playBtn6.addEventListener('click', playPause6);

audio1.onplay = function () {
	playBtn1.classList.remove('fa-play');
	playBtn1.style.color = '#D72245';
	playBtn1.classList.add('fa-pause');
}
audio2.onplay = function () {
	playBtn2.classList.remove('fa-play');
	playBtn2.style.color = '#D72245';
	playBtn2.classList.add('fa-pause');
}
audio3.onplay = function () {
	playBtn3.classList.remove('fa-play');
	playBtn3.style.color = '#D72245';
	playBtn3.classList.add('fa-pause');
}
audio4.onplay = function () {
	playBtn4.classList.remove('fa-play');
	playBtn4.style.color = '#D72245';
	playBtn4.classList.add('fa-pause');
}
audio5.onplay = function () {
	playBtn5.classList.remove('fa-play');
	playBtn5.style.color = '#D72245';
	playBtn5.classList.add('fa-pause');
}
audio6.onplay = function () {
	playBtn6.classList.remove('fa-play');
	playBtn6.style.color = '#D72245';
	playBtn6.classList.add('fa-pause');
}

audio1.onpause = function () {
	playBtn1.classList.add('fa-play');
	playBtn1.style.color = 'rgba(255,255,255,0.6';
	playBtn1.classList.remove('fa-pause');
}
audio2.onpause = function () {
	playBtn2.classList.add('fa-play');
	playBtn2.style.color = 'rgba(255,255,255,0.6';
	playBtn2.classList.remove('fa-pause');
}
audio3.onpause = function () {
	playBtn3.classList.add('fa-play');
	playBtn3.style.color = 'rgba(255,255,255,0.6';
	playBtn3.classList.remove('fa-pause');
}
audio4.onpause = function () {
	playBtn4.classList.add('fa-play');
	playBtn4.style.color = 'rgba(255,255,255,0.6';
	playBtn4.classList.remove('fa-pause');
}
audio5.onpause = function () {
	playBtn5.classList.add('fa-play');
	playBtn5.style.color = 'rgba(255,255,255,0.6';
	playBtn5.classList.remove('fa-pause');
}
audio6.onpause = function () {
	playBtn6.classList.add('fa-play');
	playBtn6.style.color = 'rgba(255,255,255,0.6';
	playBtn6.classList.remove('fa-pause');
}
//#endregion

//#region NAV SCROLL
const navLinks = document.querySelectorAll('.nav-link[data-goto]');

if (navLinks.length > 0) {
	navLinks.forEach(navLink => {
		navLink.addEventListener("click", onNavLinkClick);
	});

	function onNavLinkClick(e) {
		const navLink = e.target;
		if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
			const gotoBlock = document.querySelector(navLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('nav').offsetHeight - 30;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//#endregion

//#region MENU Burger
const iconMenu = document.querySelector('.burger-mobile');
if (iconMenu) {
	const menuBody = document.querySelector('.nav-body');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

function onClickHideMenu() {
	const menuBody = document.querySelector('.nav-body');
	if (menuBody) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	}
}
//#endregion

//#region TOURS RADIO
const radioBtn = document.querySelectorAll('.radio-select');
if (radioBtn.length > 0) {
	console.log(radioBtn);
	radioBtn.forEach(radioClick => {
		radioClick.addEventListener("click", onRadioBtnClick);
	});

	function onRadioBtnClick(e) {
		const targetBtn = e.target;
		console.log(targetBtn);
		const selectRegion = document.querySelectorAll('.region');
		radioBtn[0].classList.toggle('active');
		selectRegion[0].classList.toggle('active');
		radioBtn[1].classList.toggle('active');
		selectRegion[1].classList.toggle('active');
		// radioBtn[0].classList.toggle('active');
		// radioBtn[1].classList.toggle('active');
	}
}
//#endregion