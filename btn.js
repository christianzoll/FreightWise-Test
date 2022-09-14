'use strict';
       
        /**
         * Creates a button for kicking off the test and adds it to the DOM.
         *
         * @param {HTMLElement} context  the parent element to add the button to
         * @param {Test}        test     the test to be executed
         * @returns {HTMLElement} the button added to the test
         */
        function addButtonForTest(context, test) {
            let testButton = document.createElement('button');
            let weatherInfo = document.createElement('div');

            // CREATE DOM ELEMENTS FOR API DATA 
            weatherInfo.id = 'weather-info';
            let tempDiv = document.createElement('div');
            tempDiv.id = 'temperature';
            let feelsLikeDiv = document.createElement('div');
            feelsLikeDiv.id = 'feels-like';
            let humidityDiv = document.createElement('div');
            humidityDiv.id = 'humidity';
            let windDiv = document.createElement('div');
            windDiv.id = 'wind';

            // ATTACH DOM ELEMENTS TO THEIR PARENT
            context.appendChild(testButton);
            context.appendChild(weatherInfo);
            weatherInfo.appendChild(tempDiv);
            weatherInfo.appendChild(feelsLikeDiv);
            weatherInfo.appendChild(humidityDiv);
            weatherInfo.appendChild(windDiv);
            
            testButton.type = 'button';
            testButton.innerText = 'Get the Brentwood Weather';
            testButton.onclick = () => test.run();
            
            return testButton;
        }

        // Create the Test and add a button to the UI for running the test
        const test = new Test();
        const buttonContainer = document.getElementsByClassName('button-container')[0];

        addButtonForTest(buttonContainer, test);