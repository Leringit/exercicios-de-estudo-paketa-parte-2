const container = document.getElementById('c-box__container');

const titles = [
    'Rerum corporis nisi ea eum.',
    'In laudantium quidem hic ipsam?',
    'Dolorum nostrum culpa magni reprehenderit?',
	'Lorem ipsum dolor sit amet.',
	'Officia sit hic nihil quisquam?'	
]

const texts = [
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex aut numquam quaerat deserunt rerum minima dolor autem reiciendis mollitia!',
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Earum dignissimos maxime ipsum ratione nisi, accusamus enim!',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae fugit laudantium porro dicta mollitia cum corrupti placeat dignissimos. Autem maiores consectetur reiciendis repudiandae architecto officia ut placeat sapiente. Perferendis, doloremque veniam dignissimos nemo recusandae ipsa sint magni, aliquid repudiandae libero quidem et facilis ad odit, quia eligendi error cum!'
]


window.addEventListener('scroll', () => {
	
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
		criarPost()
	}
});

criarPost()
criarPost()
criarPost()

function criarPost() {
	const post = document.createElement('section')
	post.classList.add('c-box__container')
	post.innerHTML = `
        <div class="c-box__desc">
            <img src="img/bia.jpg" alt="Bia" />
        </div>	
        <div class="c-box__desc">
                <h2 class="espace">${randomFrom(titles)}</h2>
                <small class="date">${randomDate()}</small>
                <p class="espace">${randomFrom(texts)}</p>
            </div>
        </section>
	`
	container.appendChild(post)
}

function randomFrom(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
    
}

function randomDate() {
	const day = Math.floor(Math.random() * 27) + 1
	const month = Math.floor(Math.random() * 11) + 1
	return `${day}/${month}/2021`
}