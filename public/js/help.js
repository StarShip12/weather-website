/* 

const {Router} = require('express')
const router = Router()




module.exports = router




const titleProblem = document.querySelector('#p')
const sendTitle = document.querySelector('#TitleOfProblem')
const sendDes = document.querySelector('#DescriptionOfProblem')


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
        messageOk.textContent = 'Problem sended. We`re going to work in the problem!'
    }
 
})  */