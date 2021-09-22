let result = document.getElementById('result');

let USERS = {
	'Leonardo': {
		name: 'Leonardo',
		img: './img/leonardo.jpg'
	},
	'Wanessa': {
		name: 'Wanessa',
		img: './img/wanessa.jpg'
	},
	'Lucas': {
		name: 'Lucas',
		img: './img/lucas.jpg'
	},
	'Caroline': {
		name: 'Caroline',
		img: './img/caroline.jpg'
	},
	'Renato': {
		name: 'Renato'
		,img: './img/renato.jpg'
	},
}

function renderUsers(users){
	function item(user) {
		return `
			<li>
				<img src=${user.img} >
				<span>${user.name}</span>				
			</li>
		`
	}
	const elements = Object.keys(users).map((user) => {
		return item(users[user])
	})
	document.querySelector("#result").insertAdjacentHTML('beforeend', elements)
}

function filter(valorDigitado){
	let newUsers = [] 
	
	
	Object.keys(USERS).forEach(user => {
		if ((USERS[user].name).includes(valorDigitado)) {
			newUsers.push(USERS[user]) 
		}
	}) 
	document.querySelector("#result").innerHTML = ''
	console.log('newUsers', newUsers)
	renderUsers(newUsers)
} 

const filterElement = document.querySelector('#filter');

filterElement.addEventListener('change', (event) => {
	const value = event.target.value
	filter(value)
});
renderUsers(USERS)