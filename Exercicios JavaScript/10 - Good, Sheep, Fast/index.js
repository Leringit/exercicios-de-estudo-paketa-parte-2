const opcao = document.querySelectorAll('.toggle');
const good = document.getElementById('c-good');
const cheap = document.getElementById('c-cheap');
const fast = document.getElementById('c-fast');

opcao.forEach(toggle => {
	toggle.addEventListener('change', (e) => {
		selec(e.target)
	});
});

function selec(click) {	
	if(good.checked && cheap.checked && fast.checked) {	
		if(good === click) {
			fast.checked = false;
		}
		
		if(cheap === click) {
			good.checked = false;
		}
		
		if(fast === click) {
			cheap.checked = false;
		}
	}
}