const submitButton = document.getElementById('submitBtn');
const getCity = document.getElementById('cityName');
const temp = document.getElementById('temp_real_val');
const TempStatus = document.getElementById('temp_status');
const city_name = document.getElementById('city_name');
const middle_layer = document.querySelector('.data_hide');

const getWeather = async (event) => {
    event.preventDefault();
    const city = getCity.value;
    if(city === '')
    {
        city_name.innerText = "please enter the city name properly";
        middle_layer.classList.add('data_hide');
    }else{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8a5458a9fa702de15964e05a1caa8a0b`;
            let response = await fetch(url);
            let data = await response.json();
            const tempMode = data.weather[0].main;
            if(tempMode == 'Clear')
            {
                TempStatus.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'> </i>";
            }else if(tempMode == 'Clouds')
            {
                TempStatus.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'> </i>";
            }else if(tempMode == 'Rain')
            {
                TempStatus.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'> </i>";
            }else
            {
                TempStatus.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'> </i>";
            }
            
            middle_layer.classList.remove('data_hide');
            city_name.innerText = `${data.name}, ${data.sys.country}`; 
            temp.innerText = `${data.main.temp}`
        }catch{
            city_name.innerText = "please enter the city name properly";
            middle_layer.classList.add('data_hide');
        }
    }
}

submitButton.addEventListener('click', getWeather);