


console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-3')
const messageTwo = document.querySelector('#message-4')
const messageThree = document.querySelector('#message-5')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/converter/convert?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
            messageTwo.textContent = ''
            messageThree.textContent = ''
        }else{
        messageOne.textContent = ('The coordinates of ' + data.location + ' are:')
        messageTwo.textContent = ( 'latitude: ' + data.latitude)
        messageThree.textContent = ( 'longitude: ' + data.longitude)
        }
    })
}) 
})