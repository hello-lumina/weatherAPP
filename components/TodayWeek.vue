<template>
  <div>
    <Header @set-active="setActiveC"/>

    <div class="week margin-top-xl">
      <SkeletonCard v-if="!weatherInfo" v-for="index in 7" :key="index"/>
      <Card
          v-else
          v-for="forecast in weatherInfo.forecast.forecastday"
          v-bind="forecast"
      />





      <div :class="{ 'card': weatherInfo, 'skeleton-loading-card': !weatherInfo }">
        <p v-if="weatherInfo">{{ dayOne }}</p>
        <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path :d="iconOne"
                fill="rgb(75,0,130)"></path>
        </svg>
        <p v-if="weatherInfo">{{ minTemperatureOne }}&deg;{{ temperatureSign }} <span
            class="color-bg-darker">{{ maxTemperatureOne }}&deg;{{ temperatureSign }}</span></p>
      </div>

      <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
        <p v-if="weatherInfo">{{ dayTwo }}</p>
        <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path :d="iconTwo"
                fill="rgba(3, 138, 255)"></path>
        </svg>
        <p v-if="weatherInfo">{{ minTemperatureTwo }}&deg;{{ temperatureSign }} <span
            class="color-bg-darker">{{ maxTemperatureTwo }}&deg;{{ temperatureSign }}</span></p>
      </div>

      <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
        <p v-if="weatherInfo">{{ dayThree }}</p>
        <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path :d="iconThree"
                fill="rgba(3, 138, 255)"></path>
        </svg>
        <p v-if="weatherInfo">{{ minTemperatureThree }}&deg;{{ temperatureSign }} <span
            class="color-bg-darker">{{ maxTemperatureThree }}&deg;{{ temperatureSign }}</span></p>
      </div>

      <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
        <p v-if="weatherInfo">{{ dayFour }}</p>
        <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path :d="iconFour"
                fill="rgba(3, 138, 255)"></path>
        </svg>
        <p v-if="weatherInfo">{{ minTemperatureFour }}&deg;{{ temperatureSign }} <span
            class="color-bg-darker">{{ maxTemperatureFour }}&deg;{{ temperatureSign }}</span></p>
      </div>

      <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
        <p v-if="weatherInfo">{{ dayFive }}</p>
        <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path :d="iconFive"
                fill="rgba(3, 138, 255)"></path>
        </svg>
        <p v-if="weatherInfo">{{ minTemperatureFive }}&deg;{{ temperatureSign }} <span
            class="color-bg-darker">{{ maxTemperatureFive }}&deg;{{ temperatureSign }}</span></p>
      </div>

      <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
        <p v-if="weatherInfo">{{ daySix }}</p>
        <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path :d="iconSix"
                fill="rgba(3, 138, 255)"></path>
        </svg>
        <p v-if="weatherInfo">{{ minTemperatureSix }}&deg;{{ temperatureSign }} <span
            class="color-bg-darker">{{ maxTemperatureSix }}&deg;{{ temperatureSign }}</span></p>
      </div>

      <div :class="{ 'card': weatherInfo!=null, 'skeleton-loading-card': weatherInfo==null }">
        <p v-if="weatherInfo">{{ daySeven }}</p>
        <svg v-if="weatherInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path :d="iconSeven"
                fill="rgba(3, 138, 255)"></path>
        </svg>
        <p v-if="weatherInfo">{{ minTemperatureSeven }}&deg;{{ temperatureSign }} <span
            class="color-bg-darker">{{ maxTemperatureSeven }}&deg;{{ temperatureSign }}</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import {switchFunction} from '../components/Setup.js'

export default {
  data() {
    return {
      activeUnits: 'C',
      temperatureSign: 'C',
      icons: null,

      dayOne: null,
      iconOne: null,
      conditionText: null,
      minTemperatureOne: null,
      maxTemperatureOne: null,

      dayTwo: null,
      iconTwo: null,
      minTemperatureTwo: null,
      maxTemperatureTwo: null,

      dayThree: null,
      iconThree: null,
      minTemperatureThree: null,
      maxTemperatureThree: null,

      dayFour: null,
      iconFour: null,
      minTemperatureFour: null,
      maxTemperatureFour: null,

      dayFive: null,
      iconFive: null,
      minTemperatureFive: null,
      maxTemperatureFive: null,

      daySix: null,
      iconSix: null,
      minTemperatureSix: null,
      maxTemperatureSix: null,

      daySeven: null,
      iconSeven: null,
      minTemperatureSeven: null,
      maxTemperatureSeven: null,
    }
  },

  props: {
    weatherInfo: Object,
  },

  methods: {
    setActiveC() {
      this.$emit('change-sign-C');

      this.activeUnits = 'C';
      this.temperatureSign = 'C'

      this.minTemperatureOne = this.weatherInfo.forecast.forecastday[1].day.mintemp_c;
      this.maxTemperatureOne = this.weatherInfo.forecast.forecastday[1].day.maxtemp_c;

      this.minTemperatureTwo = this.weatherInfo.forecast.forecastday[2].day.mintemp_c;
      this.maxTemperatureTwo = this.weatherInfo.forecast.forecastday[2].day.maxtemp_c;

      this.minTemperatureThree = this.weatherInfo.forecast.forecastday[3].day.mintemp_c;
      this.maxTemperatureThree = this.weatherInfo.forecast.forecastday[3].day.maxtemp_c;

      this.minTemperatureFour = this.weatherInfo.forecast.forecastday[4].day.mintemp_c;
      this.maxTemperatureFour = this.weatherInfo.forecast.forecastday[4].day.maxtemp_c;

      this.minTemperatureFive = this.weatherInfo.forecast.forecastday[5].day.mintemp_c;
      this.maxTemperatureFive = this.weatherInfo.forecast.forecastday[5].day.maxtemp_c;

      this.minTemperatureSix = this.weatherInfo.forecast.forecastday[6].day.mintemp_c;
      this.maxTemperatureSix = this.weatherInfo.forecast.forecastday[6].day.maxtemp_c;

      this.minTemperatureSeven = this.weatherInfo.forecast.forecastday[7].day.mintemp_c;
      this.maxTemperatureSeven = this.weatherInfo.forecast.forecastday[7].day.maxtemp_c;
    },

    setActiveF() {
      this.$emit('change-sign-F');

      this.activeUnits = 'F';
      this.temperatureSign = 'F',

          this.minTemperatureOne = this.weatherInfo.forecast.forecastday[1].day.mintemp_f;
      this.maxTemperatureOne = this.weatherInfo.forecast.forecastday[1].day.maxtemp_f;

      this.minTemperatureTwo = this.weatherInfo.forecast.forecastday[2].day.mintemp_f;
      this.maxTemperatureTwo = this.weatherInfo.forecast.forecastday[2].day.maxtemp_f;

      this.minTemperatureThree = this.weatherInfo.forecast.forecastday[3].day.mintemp_f;
      this.maxTemperatureThree = this.weatherInfo.forecast.forecastday[3].day.maxtemp_f;

      this.minTemperatureFour = this.weatherInfo.forecast.forecastday[4].day.mintemp_f;
      this.maxTemperatureFour = this.weatherInfo.forecast.forecastday[4].day.maxtemp_f;

      this.minTemperatureFive = this.weatherInfo.forecast.forecastday[5].day.mintemp_f;
      this.maxTemperatureFive = this.weatherInfo.forecast.forecastday[5].day.maxtemp_f;

      this.minTemperatureSix = this.weatherInfo.forecast.forecastday[6].day.mintemp_f;
      this.maxTemperatureSix = this.weatherInfo.forecast.forecastday[6].day.maxtemp_f;

      this.minTemperatureSeven = this.weatherInfo.forecast.forecastday[7].day.mintemp_f;
      this.maxTemperatureSeven = this.weatherInfo.forecast.forecastday[7].day.maxtemp_f;
    },

    days() {
      const epochTimeThree = this.weatherInfo.forecast.forecastday[3].date_epoch;
      const epochTimeFour = this.weatherInfo.forecast.forecastday[4].date_epoch;
      const epochTimeFive = this.weatherInfo.forecast.forecastday[5].date_epoch;
      const epochTimeSix = this.weatherInfo.forecast.forecastday[6].date_epoch;
      const epochTimeSeven = this.weatherInfo.forecast.forecastday[7].date_epoch;

      const dateThree = new Date(epochTimeThree * 1000);
      const dateFour = new Date(epochTimeFour * 1000);
      const dateFive = new Date(epochTimeFive * 1000);
      const dateSix = new Date(epochTimeSix * 1000);
      const dateSeven = new Date(epochTimeSeven * 1000);

      const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
      this.dayOne = "Jutro"
      this.dayTwo = "Pojutrze"
      this.dayThree = daysOfWeek[dateThree.getDay()];
      this.dayFour = daysOfWeek[dateFour.getDay()];
      this.dayFive = daysOfWeek[dateFive.getDay()];
      this.daySix = daysOfWeek[dateSix.getDay()];
      this.daySeven = daysOfWeek[dateSeven.getDay()];

      const icons = {};
      this.weatherInfo.forecast.forecastday.forEach((forecastDay, index) => {
        const conditionText = forecastDay.day?.condition?.text;
        const icon = switchFunction(conditionText);
        icons[`icon${index + 1}`] = icon;
      });

      this.iconOne = icons.icon2;
      this.iconTwo = icons.icon3;
      this.iconThree = icons.icon4;
      this.iconFour = icons.icon5;
      this.iconFive = icons.icon6;
      this.iconSix = icons.icon7;
      this.iconSeven = icons.icon7;
    }
  }
}
</script>
<style lang="scss">

.skeleton-loading-card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: var(--radius-md);
  padding: var(--space-md);
  align-items: center;
  height: 260px;
  width: 100%;
  background-color: var(--color-white);
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  animation: pulseAnimation .8s infinite alternate;
}

@keyframes pulseAnimation {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}
</style>
