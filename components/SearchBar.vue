<template>
  <div class="col-3@md left">

<div class="search">
  <div class="search__input">
    <svg class="search__input--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
         height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"
          fill="var(--color-contrast)"></path>
    </svg>
    <input type="text" placeholder="Search for places..." v-model='writingLocation' @click='askForLocationPermission' @keyup.enter="search">
  </div>
  <div class="search__aim">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          d="M11 5.07089C7.93431 5.5094 5.5094 7.93431 5.07089 11H7V13H5.07089C5.5094 16.0657 7.93431 18.4906 11 18.9291V17H13V18.9291C16.0657 18.4906 18.4906 16.0657 18.9291 13H17V11H18.9291C18.4906 7.93431 16.0657 5.5094 13 5.07089V7H11V5.07089ZM3.05493 11C3.51608 6.82838 6.82838 3.51608 11 3.05493V1H13V3.05493C17.1716 3.51608 20.4839 6.82838 20.9451 11H23V13H20.9451C20.4839 17.1716 17.1716 20.4839 13 20.9451V23H11V20.9451C6.82838 20.4839 3.51608 17.1716 3.05493 13H1V11H3.05493ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
          fill="var(--color-contrast)"></path>
    </svg>
  </div>
</div>
<div :class="{ 'today-weather-icon': weatherInfo, 'skeleton-loading-icon': !weatherInfo }">
  <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="200" height="200">
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
        :d="icon"
        fill="var(--color-bg)"></path>
  </svg>
</div>

<!--      TODO: component-->
<!--      <div>-->  
<div :class="{ 'temperature': weatherInfo, 'skeleton-loading-temperature': !weatherInfo }">
  <span class="temperature__value" v-if="weatherInfo">{{ temperature }}</span>
  <span class="temperature__unit" v-if="weatherInfo">&deg;C</span>
</div>

<div :class="{ 'date': weatherInfo, 'skeleton-loading-date': !weatherInfo }">
  <h4 v-if="weatherInfo">{{ weekDay }}, <span class="color-bg-darker">{{ dayHour }}</span></h4>
</div>
<!--      </div>-->
<!--      TODO: component-->

<hr class="h  r">

<div class="details">
  <div :class="{ 'details__single': weatherInfo, 'skeleton-loading-details': !weatherInfo }">
    <svg  v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          :d="icon"
          fill="var(--color-bg-darker)"></path>
    </svg>
    <p v-if="weatherInfo">{{ weatherAppearance }}</p>
  </div>
  <div :class="{ 'details__single': weatherInfo, 'skeleton-loading-details': !weatherInfo }">
    <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          d="M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z"
          fill="var(--color-bg-darker)"></path>
    </svg>
    <p v-if="weatherInfo">Szansa na opady deszczu, {{ rainSnowChances }}%</p>
  </div>
</div>

<div :class="{ 'location margin-top-md': weatherInfo, 'skeleton-loading-image': !weatherInfo }">
  <img v-if="weatherInfo" class="location__image"
       :src="image_src"
       alt="Weather App">
  <h4 class="location__name" v-if="weatherInfo">{{ location }}, {{ country }}</h4>
</div>

</div>
</template>

<script>  
export default {
    data() {
        return{
            writingLocation: '',
            searchLocation: null,
            weatherInfo: null,
            dayorNight: null,
            temperature: null,
            weatherAppearance: null,
            location: null,
            country: null,
            region: null,
            weekDay: null,
            dayHour: null,
            rainSnowChances: null,
            imageInfo: null,
            image_src: null,
            icon: null,
              };
           },
    methods: {
        askForLocationPermission() {
            if("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log('Lokalizacja uzyskana!');
                                  },
                    
                    (error) => {
                        console.error('Bład!', error);
                               },
                                                        );
                                           }
            else {
                console.error('Przeglądarka nie obsługuje geolokalizacji!');
                 }
                                   },
                                   
        search() {
            this.searchLocation = this.writingLocation;
                if(this.writingLocation.trim() != '') {
                    this.getWeatherInfo();
                    this.getStreetViewImage();
                                                      }
                 },

          getWeatherInfo(){
            const apiKey = '5601e40046454d11965130257232811';
            const wheaterApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${this.searchLocation}&days=10&aqi=no&alerts=no`;  
                fetch(wheaterApiUrl) 
                    .then(response => response.json())
                    .then(info => {
                          this.weatherInfo = info;
                          this.dayorNight = this.weatherInfo.current.condition.is_day;
                          this.temperature = this.weatherInfo.current.temp_c; 
                          this.location = this.weatherInfo.location.name;
                          this.country = this.weatherInfo.location.country;
                          this.region= this.weatherInfo.location.tz_id.split("/")[0];
                            const epochTime = this.weatherInfo.current.last_updated_epoch;
                              const date = new Date(epochTime * 1000);
                                const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
                                const hours = date.getHours();
                                const minutes = date.getMinutes();
                                  this.weekDay = daysOfWeek[date.getDay()];
                                  this.dayHour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                                        const rainChances = this.weatherInfo.forecast.forecastday[0].day.daily_chance_of_rain;
                                        const snowChances = this.weatherInfo.forecast.forecastday[0].day.daily_chance_of_snow;
                                          this.rainSnowChances = snowChances;
                                            const BigIcon = document.getElementById("myBigIcon");
                                          switch (this.weatherInfo.current.condition.text) {
                                                case "Sunny":
                                                  this.weatherAppearance = "Słonecznie";
                                                  this.day ="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z";
                                                  this.night ="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z";
                                                break;

                                                case "Partly cloudy":
                                                  this.weatherAppearance = "Częściowo pochumrnie";
                                                  this.day = "M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z";
                                                  this.night = "M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z";
                                                break;

                                                case "Cloudy":
                                                  this.weatherAppearance = "Pochmurnie";
                                                  this.day ="M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419Z";
                                                  this.night ="M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433Z";
                                                break;

                                                case "Overcast":
                                                this.weatherAppearance = "Zachmurzenie";
                                                this.day = "M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z";
                                                this.night = "M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z";
                                                break;

                                                case "Mist":
                                                  this.weatherAppearance = "Mgliście";
                                                  this.day = "M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H7V11H2V9ZM9 9H12V11H9V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H15V16H12V14ZM17 14H22V16H17V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z";
                                                  this.night = "M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H7V11H2V9ZM9 9H12V11H9V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H15V16H12V14ZM17 14H22V16H17V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z";
                                                break;

                                                case "Patchy rain possible":
                                                  this.weatherAppearance = "Możliwe przelotne opady deszczu";
                                                  this.day = "M16 18V16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C16.2057 8 15.4654 8.23153 14.8431 8.63079C14.2236 5.97685 11.8427 4 9 4C5.68629 4 3 6.68629 3 10C3 12.973 5.16229 15.441 8 15.917V17.9381C4.05369 17.446 1 14.0796 1 10C1 5.58172 4.58172 2 9 2C11.9967 2 14.6086 3.64768 15.9791 6.08651C16.3109 6.02963 16.652 6 17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H16ZM10.2322 18.7322L12 16.9645L13.7678 18.7322C14.7441 19.7085 14.7441 21.2915 13.7678 22.2678C12.7915 23.2441 11.2085 23.2441 10.2322 22.2678C9.25592 21.2915 9.25592 19.7085 10.2322 18.7322Z";
                                                  this.night = "M16 18V16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C16.2057 8 15.4654 8.23153 14.8431 8.63079C14.2236 5.97685 11.8427 4 9 4C5.68629 4 3 6.68629 3 10C3 12.973 5.16229 15.441 8 15.917V17.9381C4.05369 17.446 1 14.0796 1 10C1 5.58172 4.58172 2 9 2C11.9967 2 14.6086 3.64768 15.9791 6.08651C16.3109 6.02963 16.652 6 17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H16ZM10.2322 18.7322L12 16.9645L13.7678 18.7322C14.7441 19.7085 14.7441 21.2915 13.7678 22.2678C12.7915 23.2441 11.2085 23.2441 10.2322 22.2678C9.25592 21.2915 9.25592 19.7085 10.2322 18.7322Z";
                                                break;

                                                case "Patchy snow possible":
                                                  this.weatherAppearance = " Możliwe przelotne opady śniegu";
                                                  this.day = "";
                                                  this.night = "";
                                                break;

                                                case "Patchy sleet possible":
                                                  this.weatherAppearance = "Możliwe przelotne opady deszczu, ze śniegiem";
                                                break;

                                                case "Patchy freezing drizzle possible":
                                                  this.weatherAppearance = "Możliwe przelotne mżawki";
                                                break;

                                                case "Thundery outbreaks possible":
                                                  
                                                break;

                                                case "Blowing snow":
                                                  this.weatherAppearance = "Zamieć śnieżna";  
                                                break;

                                                case "Blizzard":
                                                  this.weatherAppearance = "Zamieć śnieżna z dużymi opadami";
                                                break;

                                                case "Fog":
                                                  this.weatherAppearance = "Mgła";
                                                break;
                                                  
                                                case "Freezing fog":
                                                this.weatherAppearance = "Marznąca mgła";
                                                break;

                                                case "Patchy light drizzle":
                                                  this.weatherAppearance = "Przelotne niewielkie opady mżawki";
                                                break;

                                                case "Light drizzle":
                                                  this.weatherAppearance = "Lekka mżawka";
                                                break;

                                                case "Freezing drizzle":
                                                  this.weatherAppearance = "Marznąca mżawka ";
                                                break;

                                                case "Heavy freezing drizzle":
                                                this.weatherAppearance = "Intensywna marznąca mżawka"; 
                                                break;

                                                case "Patchy light rain":
                                                  this.weatherAppearance = "Przelotne, niewielkie opady deszczu";
                                                break;

                                                case "Light rain":
                                                  this.weatherAppearance = "Lekkie opady deszczu";
                                                break;

                                                case "Moderate rain at times":
                                                this.weatherAppearance = "Możliwe umiarkowane opady deszczu";
                                                break;

                                                case "Moderate rain":
                                                  this.weatherAppearance = "Umiarkowane opady deszczu";
                                                break;

                                                case "Heavy rain at times":
                                                  this.weatherAppearance = "Możliwe intensywne opady deszczu";
                                                break;
                                                  
                                                case "Heavy rain":
                                                this.weatherAppearance = "Intensywne opady deszczu"; 
                                                break;

                                                case "Light freezing rain":
                                                  this.weatherAppearance = "Lekkie marznące opady deszczu";
                                                break;

                                                case "Moderate or heavy freezing rain":
                                                this.weatherAppearance = "Umiarkowany lub silny marznący deszcz"; 
                                                break;

                                                case "Light sleet":
                                                  this.weatherAppearance = "Lekki deszcz ze śniegiem";
                                                break;

                                                case "Moderate or heavy sleet":
                                                  this.weatherAppearance = "Umiarkowane lub intensywne opady deszczu ze śniegiem";
                                                break;

                                                case "Patchy light snow":
                                                this.weatherAppearance = "Niejednolite, lekkie opady śniegu";
                                                break;

                                                case "Light snow":
                                                  this.weatherAppearance = "Lekkie opady śniegu";
                                                  this.day = "";
                                                  this.night = "";
                                                break;

                                                case "Patchy moderate snow":
                                                  this.weatherAppearance = "Przelotne, umiarkowane opady śniegu";
                                                break;
                                                  
                                                case "Moderate snow":
                                                this.weatherAppearance = "Umiarkowane opady śniegu"; 
                                                break;

                                                case "Patchy heavy snow":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Heavy snow":
                                                this.weatherAppearance = ""; 
                                                break;

                                                case "Ice pellets":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Light rain shower":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Moderate or heavy rain shower":
                                                this.weatherAppearance = "";
                                                break;

                                                case "Torrential rain shower":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Light sleet showers":
                                                  this.weatherAppearance = "";
                                                break;
                                                  
                                                case "Moderate or heavy sleet showers":
                                                this.weatherAppearance = ""; 
                                                break;

                                                case "Light snow showers":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Moderate or heavy snow showers":
                                                this.weatherAppearance = ""; 
                                                break;

                                                case "Light showers of ice pellets":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Moderate or heavy showers of ice pellets":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Patchy light rain with thunder":
                                                this.weatherAppearance = "";
                                                break;

                                                case "Moderate or heavy rain with thunder":
                                                  this.weatherAppearance = "";
                                                break;

                                                case "Patchy light snow with thunder":
                                                  this.weatherAppearance = "";
                                                break;
                                                  
                                                case "Moderate or heavy snow with thunder":
                                                this.weatherAppearance = ""; 
                                                break;
                                                                                 }
                                                  if(this.dayorNight = 1) {
                                                    this.icon = this.day;
                                                                          }
                                                  else {
                                                    this.icon = night;
                                                       }
                                                console.log(this.weatherInfo);
                                });
                      },

          getStreetViewImage() {
            const imageApi = `https://api.teleport.org/api/cities?search=${this.searchLocation}`
              fetch(imageApi) 
                    .then(response => response.json())
                    .then(data => {
                      const locationGeonemId = data["_embedded"]["city:search-results"][0]._links["city:item"].href;

                        fetch(locationGeonemId)
                          .then(response => response.json())
                          .then(area => {
                            const urbanAreaUrl = area["_links"]["city:urban_area"].href+"images/";

                              fetch(urbanAreaUrl)
                                .then(response => response.json())
                                .then (image => {
                                  this.image_src = image["photos"][0].image.web;
                                                })
                                         })
                                   });
                            
               }
            }
        }
</script>
<style>
.left {
  background-color: var(--color-white);
  padding: var(--space-lg) var(--space-md);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      }

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
        }

.search__input {
  display: flex;
  align-items: center;
  background: transparent;
               }

.search__input--icon {
  margin-right: var(--space-xs);
                     }

.search input {
  border: none;
  outline: none;
  background: transparent;
      }

.search input::placeholder {
  color: var(--color-contrast-higher);
                   }

.search__aim {
  background-color: var(--color-bg);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  cursor: pointer;
            }

.search__aim:hover svg {
  transform: scale(1.2);
                       }

.temperature {
  position: relative;
  display: flex;
  align-items: center;
  height: 125px;
             }

.temperature__value {
  font-size: 7em;
  position: relative;
  display: inline-block;
                    }

.temperature__unit {
  font-size: 2em;
  place-self: baseline;
                   }

.details {
  padding: var(--space-sm) 0;
         }
         
.details__single {
    display: flex;
    gap: var(--space-xs);
    align-items: center;
                 } 

.details__single p {
      font-size: 16px;
      margin: var(--space-xxxxs) 0;
      color: var(--color-contrast);
                  }

.location {
  position: relative;
  height: 150px;
          }

.location::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: var(--radius-md);
                 }

.location__image {
    border-radius: var(--radius-md);
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
                 }

.location__name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  z-index: 100;
  white-space: nowrap;
  margin: 0;
                }

.today-weather-icon {
  display: grid;
  place-items: center;
  margin: var(--space-lg) 0;
                    }

.skeleton-loading-temperature {
  height: 150px;
  width: 100%;
  background-color: #c0c0c0;  
  margin-bottom: 8px;
  border-radius: 4px;
  align-items: flex-start;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  animation: pulseAnimation 1.5s infinite alternate;
                              }

.skeleton-loading-date {
  height: calc(30px + 10 * (100vw - 320px)/1540);
  width: 100%;
  background-color: #c0c0c0;  
  margin-bottom: 8px;
  border-radius: 4px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  animation: pulseAnimation 1.5s infinite alternate;
                        }

  .skeleton-loading-details {
    height: calc(30px + 10 * (100vw - 320px)/1540);
    width: 100%;
    background-color: #c0c0c0;  
    margin-bottom: 8px;
    border-radius: 4px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    animation: pulseAnimation 1.5s infinite alternate;
                              }

  .skeleton-loading-image {
    margin-top: 20px;
    height: 150px;
    width: 100%;
    background-color: #c0c0c0;  
    margin-bottom: 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-md);
    width: 100%;
    object-fit: cover;
    position: relative;
    animation: pulseAnimation 1.5s infinite alternate;
                            }

  .skeleton-loading-icon {
    height: 260px;
    margin-top: 30px;
    width: 100%;
    background-color: #c0c0c0;  
    margin-bottom: 8px;
    border-radius: 4px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    animation: pulseAnimation 1.5s infinite alternate;
                         }

@keyframes pulseAnimation {
  from {
    opacity: 0.6;
       }

  to {
    opacity: 1;
     }
                          }
</style>