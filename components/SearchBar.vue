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
    <path id="myIcon"
        d="M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z"
        fill="var(--color-bg)"></path>
  </svg>
</div>

<!--      TODO: component-->
<!--      <div>-->  
<div :class="{ 'temperature': weatherInfo, 'skeleton-loading-temperature': !weatherInfo }">
  <span class="temperature__value" v-if="weatherInfo">{{ weatherInfo.current.temp_c }}</span>
  <span class="temperature__unit" v-if="weatherInfo">&deg;C</span>
</div>

<div :class="{ 'date': weatherInfo, 'skeleton-loading-date': !weatherInfo }">
  <h4 v-if="weatherInfo">{{ dayOfWeek }}, <span class="color-bg-darker">{{ dayHour }}</span></h4>
</div>
<!--      </div>-->
<!--      TODO: component-->

<hr class="h  r">

<div class="details">
  <div :class="{ 'details__single': weatherInfo, 'skeleton-loading-details': !weatherInfo }">
    <svg  v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path id="myPath"
          d="M9.5 6C5.91015 6 3 8.91015 3 12.5C3 16.0899 5.91015 19 9.5 19H16.5C18.9853 19 21 16.9853 21 14.5C21 12.0147 18.9853 10 16.5 10C16.1717 10 15.8516 10.0352 15.5433 10.1019C14.589 7.69894 12.2429 6 9.5 6ZM16.5 21H9.5C4.80558 21 1 17.1944 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 8.00348C20.2051 8.11671 23 10.982 23 14.5C23 18.0899 20.0899 21 16.5 21Z"
          fill="var(--color-bg-darker)"></path>
    </svg>
    <p v-if="weatherInfo">{{ weatherName }}</p>
  </div>
  <div :class="{ 'details__single': weatherInfo, 'skeleton-loading-details': !weatherInfo }">
    <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          d="M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z"
          fill="var(--color-bg-darker)"></path>
    </svg>
    <p v-if="weatherInfo">Szansa na opady deszczu, {{ rainChances }}%</p>
  </div>
</div>

<div :class="{ 'location margin-top-md': weatherInfo, 'skeleton-loading-image': !weatherInfo }">
  <img v-if="weatherInfo" class="location__image"
       src="https://plus.unsplash.com/premium_photo-1682657000431-84ea0dcf361c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww"
       alt="Weather App">
  <h4 class="location__name" v-if="weatherInfo">{{ location }}, {{ country }}, {{ region }}</h4>
</div>

</div>
</template>

<script>  
export default {
    data() {
        return{
            searchLocation: null,
            weatherInfo: null,
            weatherName: null,
            location: null,
            country: null,
            region: null,
            dayOfWeek: null,
            dayHour: null,
            rainChances: 0,
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
                    this.getStreetViewImage();
                                                      }
                 },

          getWeatherInfo(){
            const apiKey = '5601e40046454d11965130257232811';
            const wheaterApiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.searchLocation}`;
                fetch(wheaterApiUrl) 
                    .then(response => response.json())
                    .then(info => {
                        this.weatherInfo = info;
                        const epochTime = this.weatherInfo.current.last_updated_epoch;
                        const rain = this.weatherInfo.current.precip_mm;
                        const chances = rain*100;
                        const region = this.weatherInfo.location.tz_id;
                        const city = this.weatherInfo.location.name;
                          const date = new Date(epochTime * 1000);
                            const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
                            const hours = date.getHours();
                            const minutes = date.getMinutes();
                              this.location = city;
                              this.dayOfWeek = daysOfWeek[date.getDay()];
                              this.dayHour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                              this.rainChances = chances;
                              this.country = this.weatherInfo.location.country;
                              this.region = region.split("/")[0];

                        console.log(this.weatherInfo);

                        const pathIcon = document.getElementById("myIcon")
                        const pathElement = document.getElementById("myPath")

                          if(info.current.condition.text == "Sunny") {
                            this.weatherName = "Słonecznie";
                            const newDValue = "M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z";
                            const newFillvalue = "rgba(255,168,0,1)";
                              pathElement.setAttribute("d", newDValue);
                              pathIcon.setAttribute("d", newDValue);
                              pathIcon.setAttribute("fill", newFillvalue);
                                                                     } 

                          else if(info.current.condition.text == "Partly cloudy") {
                            this.weatherName = "Częściowe zachmurzenie"
                            const newDValue = "M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419Z";
                            const newFillvalue = "rgba(70,146,221,1)";
                              pathElement.setAttribute("d", newDValue);
                              pathIcon.setAttribute("d", newDValue);
                                                                                  }

                          else if(info.current.condition.text == "Overcast") {
                            this.weatherName = "Pochmurno"
                            const newDValue = "M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z";
                              pathElement.setAttribute("d", newDValue);
                                                                             }

                          else if(info.current.condition.text == "Light snow") {
                            this.weatherName = "Lekkie opady śniegu"
                            const newDValue = "M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z"
                            const newFillvalue = "rgba(70,146,221,1)";
                              pathElement.setAttribute("d", newDValue);
                              pathIcon.setAttribute("d", newDValue);
                              pathIcon.setAttribute("fill", newFillvalue);
                                                                               }
                                                                              
                          else if(info.current.condition.text == "Clear") {
                            this.weatherName = "Bezchmurnie"
                            const newDValue = "M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z"
                              pathElement.setAttribute("d", newDValue);
                                                                          }
                                                                        
                          else if(info.current.condition.text == "Cloudy") {
                            this.weatherName = "Pochmurnie"
                            const newDValue = "M9.5 6C5.91015 6 3 8.91015 3 12.5C3 16.0899 5.91015 19 9.5 19H16.5C18.9853 19 21 16.9853 21 14.5C21 12.0147 18.9853 10 16.5 10C16.1717 10 15.8516 10.0352 15.5433 10.1019C14.589 7.69894 12.2429 6 9.5 6ZM16.5 21H9.5C4.80558 21 1 17.1944 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 8.00348C20.2051 8.11671 23 10.982 23 14.5C23 18.0899 20.0899 21 16.5 21Z"
                              pathElement.setAttribute("d", newDValue);
                                                                          }  
                                  });
                      },

          getStreetViewImage() {

                               },
             },
               };
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