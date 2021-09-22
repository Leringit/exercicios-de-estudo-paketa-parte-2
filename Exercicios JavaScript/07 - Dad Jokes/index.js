const MGS = [
	{
        
		text: '<h3>At the boxing match, the dad got into the popcorn line and the line for hot dogs, but he wanted to stay out of the punchline.</h3>'
	},
	{
		text: '<h3>"Hey, dad, did you get a haircut?" "No, I got them all cut."</h3>',
	},
	{
		text: '<h3>Where was the Declaration of Independence signed? At the bottom!</h3>'
	},
	{
		text: '<h3>How many bones are in the human hand? A handful of them.</h3>'
	},
	{
		text: '<h3>What did the hat say to the scarf? You can hang around. I"ll just go on ahead.</h3>'
	},
	{
		text: '<h3>Did you hear the joke about the wandering nun? She was a roman catholic.</h3>'
	},
	{
		text: '<h3>Chances are if you"ve seen one shopping center, you"ve seen a mall.</h3>'
	},
	{
		text: '<h3>Why are oranges the smartest fruit? Because they are made to concentrate.</h3>'
	},
	{
		text: '<h3>I made a belt out of watches once... It was a waist of time.</h3>'
	}]


const btn = document.querySelector('.c-btn')
const texto = document.querySelector('.c-card__msg')

btn.addEventListener('click', (e) => {
	filter(e.target.value);
})

function renderMGS(mgs){
	function item(items) {
		return `
			${items.text}
		`
	}
	const elements = Object.keys(mgs).map((items, index) => {
		return item(mgs)
	})
	texto.insertAdjacentHTML('beforeend', elements)
}


function filter(){
	let newMGS = ''
	let max = MGS.length

	
	Object.keys(MGS).forEach( () => {

		newMGS = MGS[Math.floor(Math.random() * max )]
	})
	texto.innerHTML = ''
	renderMGS(newMGS)	
} 


renderMGS(MGS[1])