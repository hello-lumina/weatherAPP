<script lang="js">
export default {
  props: {
    weatherInfo: Object,
    unit: {
      type: String,
      required: true
    }
  },
}

</script>

<template>
  <div class="margin-top-xl">
    <Card
        v-bind="weatherInfo.forecast.forecastday[0]"
        :unit="unit"
    />
  </div>
</template>

<style scoped>

</style>
