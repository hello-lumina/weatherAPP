<template>
  <div>
    <h4 class="margin-top-lg">Today's highlights</h4>
      <div class="highlights">
        <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
          <p v-if="weatherInfo">Wschód słońca</p>
            <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                fill="rgba(255, 165, 0, 1)"></path>
            </svg>
              <p v-if="weatherInfo">O godzinie, {{ sunrise }} rano.</p>
        </div>

        <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
          <p v-if="weatherInfo">Zachód słońca</p>
            <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M8 12H10V14H4V12H6C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18V16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12ZM6 20H15V22H6V20ZM2 16H10V18H2V16ZM11 1H13V4H11V1ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM23 11V13H20V11H23Z"
                fill="rgba(255, 69, 0, 1)"></path>
            </svg>
            <p v-if="weatherInfo">O godzinie, {{ sunset }} wieczorem.</p>
        </div>

        <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
          <p v-if="weatherInfo">Wschód księżyca</p>
            <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
                fill="rgba(255, 223, 186)"></path>
            </svg>
            <p v-if="weatherInfo">O godzinie, {{ moonrise }} wieczorem.</p>
        </div>

        <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
          <p v-if="weatherInfo">Zachód księżyca</p>
            <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M16 20.3345V18.135C17.6993 17.2367 19.012 15.7047 19.6233 13.8537C19.0927 13.9504 18.5498 14 18 14C13.0294 14 9 9.97059 9 5.00003C9 4.95443 9.00034 4.90887 9.00102 4.86337C7.04146 5.89875 5.60285 7.77581 5.15045 10H3.11775C3.79375 5.73826 7.30375 2.42006 11.6562 2.03699C11.2352 2.93681 11 3.94095 11 5.00003C11 8.86602 14.134 12 18 12C19.475 12 20.8435 11.5438 21.972 10.7648C21.9905 11.0074 22 11.2526 22 11.5C22 15.5107 19.5146 18.9409 16 20.3345ZM7 20H14V22H7V20ZM4 12H10V14H4V12ZM2 16H12V18H2V16Z"
                fill="rgba(255, 69, 0)"></path>
            </svg>
            <p v-if="weatherInfo">O godzinie, {{ moonset }} rano.</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
          sunrise: null,
          sunset: null,
          moonrise: null,
          moonset: null,
               }
           },
    props: {
        weatherInfo: Object,
           },
    methods: {
      highlights() {
        this.sunrise = this.weatherInfo.forecast.forecastday[0].astro.sunrise.split(" ")[0];
        this.moonrise = this.weatherInfo.forecast.forecastday[0].astro.moonrise.split(" ")[0];

        this.sunset = this.weatherInfo.forecast.forecastday[0].astro.sunset.split(" ")[0];
        this.moonset = this.weatherInfo.forecast.forecastday[0].astro.moonset.split(" ")[0];
        console.log(this.weatherInfo)
                   }
             }
               }
</script>

<style>
.right {
  background-color: var(--color-bg);
  padding: var(--space-lg);
       }
       
.card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: var(--radius-md);
  padding: var(--spasm);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-white);
     }

.card:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
            }

.highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--space-base);
            }
</style>