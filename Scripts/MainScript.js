let xhr = new XMLHttpRequest();
let url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

xhr.open('GET', url);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
	const Text = xhr.response;
	const TextR = JSON.parse(Text);
	console.log(TextR);
};
