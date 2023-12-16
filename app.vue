<template>
  <div class="grid gap-md">
    <title>Pogoda</title>
    <div class="col-3@sm left">
      <SearchBar @data-fetched="dataFetched" :sign="unit" :temperature="temperature" ref="SearchBar"/>
    </div>
    <div class="col-9@sm right">
      <Header @set-unit="setUnit" @set-interval="setInterval"/>
      <Week v-if="interval === 'week'" :weatherInfo="weatherInfo" ref="TodayWeek" :unit="unit"/>
      <Today v-else :unit="unit" :weatherInfo="weatherInfo"/>

      <Highlights :weatherInfo="weatherInfo" ref="Highlights"/>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import Week from '../components/Week.vue';
import Highlights from '../components/Higlights.vue';

export default {
  components: {
    SearchBar,
    Week,
    Highlights,
  },

  data() {
    return {
      interval: 'week',
      unit: 'C',
      weatherInfo: null,
      temperature: null
    };
  },

  methods: {
    setInterval(interval){
      this.interval = interval
    },
    setUnit(unit){
      this.unit = unit
    },
    dataFetched(info) {
      this.weatherInfo = info;
      this.$nextTick(() => {
        this.$refs.TodayWeek.days();
        this.$refs.TodayWeek.setActiveC();
        this.$refs.Highlights.highlights();
      });
    },
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
