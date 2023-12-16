<script lang="js">
export default {
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
    }
  }
}
</script>

<template>
  <div class="card">
    <p>{{ date }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path :d="3434"
            fill="rgb(75,0,130)"></path>
    </svg>

    <p>Unit test: {{unit}} <span
        class="color-bg-darker"></span></p>
  </div>
</template>

<style scoped>

</style>
