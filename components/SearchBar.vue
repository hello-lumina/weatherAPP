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
<div class="today-weather-icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="200" height="200">
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
        d="M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z"
        fill="var(--color-bg)"></path>
  </svg>
</div>

<!--      TODO: component-->
<!--      <div>-->
<div class="temperature">
  <span class="temperature__value">{{ weatherInfo?.current?.temp_c }}</span>
  <span class="temperature__unit">&deg;C</span>
</div>

<div class="date">
  <h4>Monady, <span class="color-bg-darker">16:00</span></h4>
</div>
<!--      </div>-->
<!--      TODO: component-->

<hr class="h  r">

<div class="details">
  <div class="details__single">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          d="M9.5 6C5.91015 6 3 8.91015 3 12.5C3 16.0899 5.91015 19 9.5 19H16.5C18.9853 19 21 16.9853 21 14.5C21 12.0147 18.9853 10 16.5 10C16.1717 10 15.8516 10.0352 15.5433 10.1019C14.589 7.69894 12.2429 6 9.5 6ZM16.5 21H9.5C4.80558 21 1 17.1944 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 8.00348C20.2051 8.11671 23 10.982 23 14.5C23 18.0899 20.0899 21 16.5 21Z"
          fill="var(--color-bg-darker)"></path>
    </svg>
    <p v-if="weatherInfo">{{ weatherAppearance }}</p>
  </div>
  <div class="details__single">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          d="M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z"
          fill="var(--color-bg-darker)"></path>
    </svg>
    <p>Rain chances - 30%</p>
  </div>
</div>

<div class="location margin-top-md">
  <img class="location__image"
       src="https://plus.unsplash.com/premium_photo-1682657000431-84ea0dcf361c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww"
       alt="Weather App">
  <h4 class="location__name" v-if="weatherInfo">{{ weatherInfo.current.temp_c }}</h4>
</div>

</div>
</template>

<script>
          export default {
            data() {
                return{
                    searchLocation: null,
                    weatherInfo: null,
                    weatherAppearance: null,
                    writingLocation: '',
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
                                                              }
                         },

                getWeatherInfo() {
                    const apiKey = '5601e40046454d11965130257232811';
                    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.searchLocation}`;

                        fetch(apiUrl) 
                            .then(response => response.json())
                            .then(info => {
                                this.weatherInfo = info;
                                console.log(this.weatherInfo);
                                  if(this.weatherInfo.current.text=="Mist") {
                                    weatherAppearance = "Mgła";
                                                                            }
                                          })
                                 },
                     },
                       };
</script>
