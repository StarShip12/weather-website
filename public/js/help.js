


const titleProblem = document.querySelector('#p')
const sendTitle = document.querySelector('#tap')
const sendDes = document.querySelector('#dop')


titleProblem.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOk.textContent = 'Sending...'

    const titPro = sendTitle.value
    const desPro = sendDes.value
    console.log(titPro, desPro)


    if (titPro  === '' && desPro === '' ){
        messageOk.textContent = 'You must provide both arguments!'
    }else if (titPro  === '' ){
        messageOk.textContent = 'You must provide an title of the problem!'
    } else if (desPro === ''){
        messageOk.textContent = 'You must provide a description of the problem!'
    }else{
        messageOk.textContent = 'Problem sended. We are going to work in the problem!'
    }
 
})


