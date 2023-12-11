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
    <input type="text" placeholder="Search for places..." v-model='writingLocation' @click='askForLocationPermission'>
  </div>
  <div class="search__aim" id="click">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" @click="search">
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
        :fill="fillIcon"></path>
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
          :fill="fill"></path>
    </svg>
    <p v-if="weatherInfo">{{ weatherAppearance }}</p>
  </div>
  <div :class="{ 'details__single': weatherInfo, 'skeleton-loading-details': !weatherInfo }">
    <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
          :d="RainOrSnow"
          :fill="fill"></path>
    </svg>
    <p v-if="weatherInfo">{{ rainOrSnowChance }} {{ rainSnowChances }}%</p>
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
  import WeatherAppearance from "../components/WeatherAppearance.js";
  export default {
    name: 'WeatherAppearanceVue',
      data() {
        const WeatherAppearanceData = WeatherAppearance.data();
          return {
            writingLocation: WeatherAppearanceData.writingLocation,
            weatherInfo: WeatherAppearanceData.weatherInfo,
            image_src: WeatherAppearance.image_src
                 }
             },
      methods: {
        askForLocationPermission(){
          WeatherAppearance.methods.askForLocationPermission.call(this);
                                  },

        search() {
          WeatherAppearance.methods.search.call(this);
                 },

        getWeatherInfo() {
          WeatherAppearance.methods.getWeatherInfo.call(this);
                         },

        getStreetViewImage() {
          WeatherAppearance.methods.getStreetViewImage.call(this);
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