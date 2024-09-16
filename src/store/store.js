import { defineStore } from "pinia";

export const useStore = defineStore('main', {
    state: () => ({
        weatherData: {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'seoul'
        },
        toggle: false
    }),
    actions: {
        updateWeather(payload){
            this.weatherData = payload
            this.weatherData.icon = payload.weather[0].icon;
            this.weatherData.temp = payload.main.temp;
            this.weatherData.text = payload.weather[0].description;
            this.weatherData.location = payload.sys.country;
            this.weatherData.city = payload.name;
        },
        searchCity(payload){
            this.weatherData.city = payload;
    
        },
        toggleSwitch(state){
            this.toggle = !this.toggle
        },
        async getWeather(){
            const API_KEY = import.meta.env.VITE_APP_WEATHER_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`
            
            await fetch(API_URL).then((res) => res.json() )
                          .then(data => {
                            console.log(data)
                            // context.commit('updateWeather', data)
                            this.updateWeather(data)
                          })
                          .catch(err => {
                            console.log("error: " + err)
                          })
          }
    }
})