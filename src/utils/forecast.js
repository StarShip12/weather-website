const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=13206707ccf78e41d9c17ffc4f906b5a&query=' + latitude + ',' + longitude + '&units=m'

    request({ url:url, json: true }, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            const{feelslike, temperature} = body.current
            callback( undefined, body.current.weather_descriptions[0] + '. Current temperature is ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.')
        }
    
        
    })
        
            

        
}


module.exports = forecast