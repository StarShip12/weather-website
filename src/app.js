const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const converter = require('./utils/converter.js')
const path = require('path')
const express = require('express')
const hbs = require('hbs')



const app = express()

app.use(express.urlencoded({extended: false}))

const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// Setup hanlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
// Setup static  dir. to serve
app.use(require('./routes/index'))
app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Created by Jan'
        
    })
})

app.get('/ok', (req, res) => {
    res.render('ok', {
        title: 'success',
        name: 'Created by Jan'
        
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Created by Jan'
        
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Created by Jan'
        
    })
})
app.get('/email-sender', (req, res) => {
    res.render('email-sender', {
        title: 'Send an email',
        name: 'Created by Jan'
        
    })
})
app.get('/messageoftheweek', (req,res) => {
    res.render('title', {
        title: 'Message of the week',
        name: 'Created by Jan'
    })
})



app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'

    
    
        })
    }

geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error){
        return res.send({error})
    }

    forecast (latitude, longitude, (error, forecastData) => {
        if (error){
            return res.send({error})
        }

        res.send({
            forecast: forecastData,
            location,
            address: req.query.address
        })
    })
})

})

app.get('/converter', (req, res) => {
    res.render('converter', {
        title: 'Converter',
        name: 'Created by Jan'
    })
})

app.get('/converter/convert', (req, res) => {

    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'

    
    
        })
    }

geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error){
        return res.send({error})
    }
    const errorLocation = 'Can not find location'
    res.send({
        latitude,
        longitude,
        location,
        errorLocation
        })
    })
})

app.get('/converter/coord', (req, res) => {

    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }

    converter (req.query.address, (error, converterData) => {
        if (error){
            return res.send({error})
        }

        res.send({
            location: converterData
        })
    })
})



app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
}

    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404 error',
        errorMessage: 'Help article not found',
        name: 'Created by Jan'
    })
})




app.get('*', (req, res) => {
    res.render('404', {
        title: '404 error',
        errorMessage: 'Page not found',
        name: 'Created by Jan'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})