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
            callback( undefined, 'Its '+ body.current.weather_descriptions[0] + '. Current temperature is ' + temperature + ' degrees out. The wind speed is ' + body.current.wind_speed + '/kmh. The umidity is ' + body.current.humidity + ' and the visibility is ' + body.current.visibility + 'km. Have a good day!')
        }
    
        
    })
        
            

        
}


module.exports = forecast