const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const path = require('path')
const express = require('express')
const hbs = require('hbs')



const app = express()


// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// Setup hanlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
// Setup static  dir. to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
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

app.get('/title', (req,res) => {
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

    // res.send({
    //     forecast: 'Is cloudly',
    //     location: 'Spain',
    //     address: req.query.address
    // })
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

app.listen(3000, () => {
    console.log('Server is up on port 300.')
})