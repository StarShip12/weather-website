


console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('#ltc')

const searchLoc = document.querySelector('#loc')
const searchLat = document.querySelector('#lat')
const searchLon = document.querySelector('#lon')

const coordToLoc = document.querySelector('#ctl')


const messageOne = document.querySelector('#message-3')
const messageTwo = document.querySelector('#message-4')
const messageThree = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')
const messageEight = document.querySelector('#message-8')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchLoc.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/converter/convert?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
            messageTwo.textContent = ''
            messageThree.textContent = ''
            messageSix.textContent = ''
            messageSeven.textContent = ''
            messageEight.textContent = ''
        }else{
        messageOne.textContent = ('The coordinates of ' + data.location + ' are:')
        messageTwo.textContent = ( 'latitude: ' + data.latitude)
        messageThree.textContent = ( 'longitude: ' + data.longitude)
        messageSix.textContent = ''
        messageSeven.textContent = ''
        messageEight.textContent = ''
        }
    })
}) 
})


coordToLoc.addEventListener('submit', (e) => {
    e.preventDefault()
    const Latitude = searchLat.value
    const Longitude = searchLon.value
    messageSix.textContent = 'Loading...'

    const url1 = ('/converter/coord?address=' + Latitude + ',' + Longitude)

    fetch(url1).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageSix.textContent = data.error
            messageSeven.textContent = ''
            messageEight.textContent = ''
            messageOne.textContent = ''
            messageTwo.textContent = ''
            messageThree.textContent ='' 
        }else{
            messageSix.textContent = ('The location of the coordinates ' + Latitude + ' ' + Longitude  + ' is:')
            messageSeven.textContent = data.location.location
            messageEight.textContent = ''
            messageOne.textContent = ''
            messageTwo.textContent = ''
            messageThree.textContent ='' 
        }

        

    })
}) 
})