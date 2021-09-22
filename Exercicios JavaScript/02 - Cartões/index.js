const gamesEl = document.querySelectorAll('.game');
const container = document.querySelector('.container');
const nameEl = document.querySelector('.name');
const textEl = document.querySelector('.text');

const descripition = [{
	text: 'Atari, Inc. foi uma empresa de produtos eletrônicos, e uma das principais responsáveis pela popularização dos vídeo games. Foi fundada em 1972 por Nolan Bushnell e Ted Dabney e no mesmo ano começou a produzir em massa máquinas que reproduziam o jogo Pong.',
	name: 'Atari',
	color: 'rgba(130, 59, 90,1.0)'
},{
	text: 'Super Nintendo Entertainment System, (Super NES ou SNES ou Super Nintendo) é um console de videogame de 16 bits desenvolvido pela Nintendo que foi lançado em 1990 no Japão, 1991 nos Estados Unidos, 1992 na Europa e Australásia (Oceania) e América do Sul em 1993. No Japão, o sistema é chamado de Super Famicom (em japonês: スーパーファミコン, transl. Sūpā Famikon), oficialmente, adotando o nome abreviado do seu antecessor, o Famicom), ou SFC para breve. Na Coreia do Sul, é conhecido como Super Comboy e foi distribuído pela Hyundai Electronics. Embora cada versão seja essencialmente as mesmas, várias formas de bloqueio regional impedem que as diferentes versões sejam compatíveis entre si.',
	name: 'Super Nes',
	color: 'rgba(150, 130, 49,1.0)'
},{
	text: 'O PlayStation, frequentemente chamado de PlayStation 1 ou ainda PSOne, foi o primeiro console de vídeo game fabricado pela Sony, lançado em 3 de dezembro de 1994 no Japão, 9 de setembro de 1995 nos Estados Unidos e em 29 de setembro de 1995 na Europa.',
	name: 'PlayStation',
	color: 'rgba(75, 123, 236,1.0)'
},{
	text: 'O Game Boy (ゲームボーイ Gēmu Bōi?) é um console portátil desenvolvido pela Nintendo, lançado em 21 de abril de 1989 no Japão, em 31 de julho de 1989 na América do Norte e em 28 de setembro de 1990 na Europa, é o primeiro console da linha Game Boy, foi criado por Gunpei Yokoi e pela Nintendo Research & Development 1, versões redesenhadas do console foram lançadas em 1996 e em 1998, o Game Boy Pocket e o Game Boy Light (somente para o Japão)',
	name: 'Game-Boy',
	color: 'rgba(236, 94, 234,1.0)'
},{
	text: 'O Dreamcast (ドリームキャスト Dorīmukyasuto?) é um console de jogos eletrônicos lançado pela Sega em 27 de novembro de 1998 no Japão, 9 de setembro de 1999 na América do Norte e 14 de outubro de 1999 na Europa. Foi o primeiro da sexta geração de consoles, precedendo o PlayStation 2 da Sony, o GameCube da Nintendo e o Xbox da Microsoft. O Dreamcast foi o último console doméstico da Sega, marcando o fim dos 18 anos da empresa no mercado de consoles.',
	name: 'Dreamcast',
	color: 'rgba(266, 191, 107,1.0)'
}];

addTestimonial(0);

gamesEl.forEach((game, idx) => {
	game.addEventListener('click', (e) => {
		addTestimonial(idx);
		game.classList.add('selected');
	})
});

function addTestimonial(idx) {
	const testimonial = descripition[idx];
	
	nameEl.innerHTML = testimonial.name;
	textEl.innerHTML = testimonial.text;
	container.style.background = testimonial.color;
	
	gamesEl.forEach(game => {
		game.classList.remove('selected');
	});
}