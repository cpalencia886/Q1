// Weather API: AccuWeather API
const apiKey = 'hnWwKABQy6GAoKyjLTPOID1XOh6YTviG'; 
const locationKey = '52479'; 

async function fetchWeatherData() {
    try {
        const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/52479?apikey=hnWwKABQy6GAoKyjLTPOID1XOh6YTviG
        `);
        
        // Parse the response as JSON
        const data = await response.json();
        
        const temperature = data[0].Temperature.Metric.Value;
        const description = data[0].WeatherText;
        
        // Update temperature and description in the DOM
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`; // Display temperature in Celsius
        document.getElementById('description').textContent = `Description: ${description}`;
        
        // Call the function to update the weather image based on the description
        updateWeatherImage(description);
        
        // Add class to trigger animation
        document.querySelector('.weather-info').classList.add('animate');
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update weather image based on weather description
function updateWeatherImage(description) {
    const weatherImage = document.getElementById('weather-image');
    let imagePath;

    // Weather descriptions image
    switch (description.toLowerCase()) {
        case 'haze':
            imagePath = './media/haze.png';
            break;
        case 'windy':
            imagePath = './media/windy.png';
            break;
        case 'sunny':
        case 'clear':
            imagePath = './media/sunny.png';
            break;
        case 'rain':
        case 'rainy':
            imagePath = './media/rain.png';
            break;
        case 'cloudy':
            imagePath = './media/cloudy.png';
            break;
        case 'stormy':
        case 'thunderstorm':
            imagePath = './media/stormy.png';
            break;
        case 'snow':
        case 'light snow':
            imagePath = './media/snow.png';
            break;
        default:
            imagePath = './media/Default.gif'; // Default image if no match found
            break;
    }

    weatherImage.src = imagePath;
}

window.onload = fetchWeatherData;
