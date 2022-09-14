'use strict';

class Test {
    constructor() {
        this.testResults = document.getElementsByClassName('test-results');
    }
    
    async run() {
        console.log(new Date().toISOString(), '[Test]', 'Running the test');
        
        const testResults = document.querySelector('.test-results');
        
        // TODO: Make the API call and handle the results
        
        // CALL API
        const API_KEY = "25e989bd41e3e24ce13173d8126e0fd6";
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Brentwood&appid=${API_KEY}&units=metric`)
            
            .then(function(response) {
                
                //SELECT DATA RESULTS FROM RESPONSE
                const { wind } = response.data;
                const { temp, feels_like, humidity } = response.data.main;
                
                //SELECT DOM ELEMENTS 
                const weatherInfo = document.getElementById('weather-info');
                const tempDiv = document.getElementById('temperature');
                const feelsLikeDiv = document.getElementById('feels-like');
                const windDiv = document.getElementById('wind');
                const humidityDiv = document.getElementById('humidity');
                
                // GIVE DOM ELEMENTS CLASS NAMES *keeps border from view until button is clicked*
                weatherInfo.className = 'weather-info';
                tempDiv.className = 'temperature';
                feelsLikeDiv.className = 'feels-like';
                humidityDiv.className = 'humidity';
                
                // CONVERT UNITS
                let farenheight = (temp * 9/5) + 32;
                let roundFarenheight = Math.floor(farenheight);
                let feelsLike = (feels_like * 9/5) + 32;
                let roundFeelsLike = Math.floor(feelsLike);
                
                // INSERT JSON DATA INTO DOM ELEMENTS
                tempDiv.innerText = `Temp ${roundFarenheight}°`; 
                feelsLikeDiv.innerText = `Feels ${roundFeelsLike}°`; 
                humidityDiv.innerText = `Humidity ${humidity}`; 
                windDiv.innerText = `Wind ${wind.speed}`; 
                
                
                console.log("temp", temp);
                console.log("response", response);
                console.log("wind", wind);
                console.log("feels_like", feels_like);

                if(response.status != 400){
                    throw new Error('cannot fetch data');
                }
            })
        } catch(error){
            //handle error
            console.log("Here's the error", error.message);
        
        
    }
    
    setError(message) {
        // TODO: Format the error
        this.testResults.innerHTML = (message || '').toString();
        console.log("message", message)
    }
    
    setResults(results) {
        // TODO: Format the results
        this.testResults.innerHTML = (results || '').toString();
    }
}
        