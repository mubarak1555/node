const express = require('express');
const https = require('https');
const app = express()
const port = 2000;
app.get('/', (req, res) =>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tel aviv&units=metric&appid=a19d8951466f892a21884748a20d6bbb';
    https.get(url, (response) =>{
        response.on('data', (data) =>{
        const weatherData = JSON.parse(data);
        const  temp = weatherData.main.temp;
        res.write('/index.html')
        res.write('<h2>The weather monitor</h2>')
        res.write(`<h1>The temp in Tel Aviv currently is: ${temp}</h1>`)
        res.send()
        })

    })
    
})
app.listen(port, () =>{

    console.log('listening on port ' + port)
});