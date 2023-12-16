<script lang="js">
import {getIcon} from "~/components/utils/getIcon.js";

export default {
  methods: {getIcon},
  props: {
    unit: {
      type: Object,
      required: true
    },
    astro: {
      type: Object
    },
    date: {
      type: Date
    },
    day: {
      type: Object
    },

    setup() {


    }
  }
}
</script>

<template>
  <div class="card">
    <p>{{ date }}</p>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path :d="getIcon(this.day.condition.text)"></path>
    </svg>

    <p>Unit test: {{ unit }} <span
        class="color-bg-darker"></span></p>
  </div>
</template>

<style scoped>

</style>
