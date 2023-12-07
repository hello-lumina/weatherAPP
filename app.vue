<template>
  <div class="grid gap-md">
    <SearchBar/>
      <div class="col-9@md right">
        <TodayWeek/>
        <Higlights/>
      </div>
  </div>
</template>

<script>

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