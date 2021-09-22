let textArea = document.querySelector('.c-txt__sug')
let box = document.querySelector('.c-suggestions')
let sugitem = document.querySelector('.c-sug-__items')
let text = document.querySelector('.c-votes c-desc')
let btnvote = document.querySelectorAll('.btn-vote')

let newSug 
let sug = []

const sugestions = () => {
    let count = 1
    textArea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            let txtareavalor = textArea.value
            e.preventDefault()
            //if (txtareavalor != '') {
                newSug = `
                <article class="c-sug-__items">
                    <div class="c-votes">
                        <span class="c-soma"><input type="button" class="btn-vote"></span>
                        <span class="c-qtd">0</span>
                        <span>votes</span>
                    </div>                      
                    <div class="c-votes c-desc">${txtareavalor}</div>                      
                    
                </article> 
                `
            //}else{}
            sug = [...sug, newSug]

            count++
            sugitem.innerText = count
            box.innerHTML += newSug
            document.querySelector(".c-txt__sug").value = ""
            let qtdvotes = document.querySelector('.c-sug__tot')
            qtdvotes.innerText = sug.length + 2 + ` Sugestions`
        }
    })
    
}

const setVote = () => {
    box.addEventListener('click', (e) => {
        const btn = e.path.find(el => el.classList && el.classList.contains('btn-vote'))
        console.log("listener container")
        if (btn) {
            const block = e.path.find(el => el.classList && el.classList.contains('c-sug-__items'))
            console.log("event btn")
            if (btn.classList.contains('voted')) {
                btn.classList.remove('voted')
                unvote(block)
            } else {
                btn.classList.add('voted')
                vote(block)
            }
        }
    })
}

const vote = (el) => {
    let vBtn = el.querySelector('.c-qtd')
    vBtn.innerText = +vBtn.innerText + 1
}

const unvote = (el) => {
    let vBtn = el.querySelector('.c-qtd')
    vBtn.innerText = +vBtn.innerText - 1
}

const init = () => {
    sugestions()
    setVote()
}

init()