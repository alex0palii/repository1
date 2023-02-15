const header = document.querySelector('header');
const section = document.querySelector('section');

let xhr = new XMLHttpRequest();
let url = 'https://mdn.github.io/alex0palii/repository1/db.json';

xhr.open('GET', url);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
	const Text = xhr.response;
	const TextR = JSON.parse(Text);
	console.log(TextR);
};
