<template>
  <div class="grid gap-md">
    <title>Pogoda</title>
    <SearchBar @data-fetched="DataFetched" :sign="sign" :temperature="temperature" ref="SearchBar"/>
      <div class="col-9@md right">
        <TodayWeek @change-sign-C="ChangeSignC" @change-sign-F="ChangeSignF" :weatherInfo="weatherInfo" ref="TodayWeek" />
        <Higlights :weatherInfo="weatherInfo" ref="Highlights"/>
      </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import TodayWeek from '../components/TodayWeek.vue';
import Higlights from '../components/Higlights.vue';
export default {
  components: {
    SearchBar,
    TodayWeek,
    Higlights,
              },

  data() {
    return {
      weatherInfo: null,
      sign: 'F',
      temperature: null
           };
         },

  methods: {
    DataFetched(info) {
      this.weatherInfo = info;
        this.$nextTick(() => {
          this.$refs.TodayWeek.days();
          this.$refs.TodayWeek.setActiveC();
          this.$refs.Highlights.highlights();
                             });
                      },

    ChangeSignC() {
      this.sign = 'C';
                  },

    ChangeSignF() {
      this.sign = 'F';
                  }
           },
              };
</script>

<style>
* {
  box-sizing: border-box;
  }

body {
  background-color: var(--color-bg);
  color: var(--color-contrast-higher);
  margin: 0;
  overflow-x: hidden;
     } 
</style>