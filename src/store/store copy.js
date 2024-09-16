import { createStore } from "vuex";

export default createStore({
    state:{
        //초기화
        count: 0,
        weatherData: {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'seoul'
        },
        toggle: false
    },
    mutations: {    //데이터 변경
        addCount(state, payload){
            state.count += payload;
        },
        updateWeather(state, payload){
            state.weatherData = payload
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        searchCity(state, payload){
            state.weatherData.city = payload;
    
        },
        toggleSwitch(state){
            state.toggle = !state.toggle
        }
    },
    actions:{
        getWeather(context){
            const API_KEY = import.meta.env.VITE_APP_WEATHER_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`
            
            fetch(API_URL).then((res) => res.json() )
                          .then(data => {
                            console.log(data)
                            context.commit('updateWeather', data)
                          })
                          .catch(err => {
                            console.log("error: " + err)
                          })
          }
    }
})