<template>
  <div class="header">
    <div class="nav">
      <p @click="setInterval('today')" class="nav__item" :class="{'nav__item active': interval === 'today'}">Dziś</p>
      <p @click="setInterval('week')" class="nav__item" :class="{'nav__item active': interval === 'week'}">Długoterminowo</p>
    </div>

    <div class="units">
      <DarkMode/>

      <div @click="setActive('F')" class="units__item" :class="{'units__item active': unit === 'F'}">
        <span>&deg;F</span>
      </div>
      <div @click="setActive('C')" class="units__item" :class="{'units__item active': unit === 'C'}">
        <span>&deg;C</span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, defineComponent} from 'vue';

export default defineComponent({
  setup(props, {emit}) {
    const unit = ref('C');
    const interval = ref('week');

    const setActive = (selectedUnit) => {
      unit.value = selectedUnit;
      emit('setUnit', selectedUnit);
    };

    const setInterval = (selectedInterval) => {
      interval.value = selectedInterval
      emit('setInterval', selectedInterval);
    }

    return {
      setActive,
      unit,
      interval,
      setInterval
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  &__item {
    line-height: 1.4;
    color: var(--color-bg-darker);
    margin: 0;
    cursor: pointer;
    transition: all .3s ease-out;

    &:hover {
      color: var(--color-contrast-higher);
    }

    &.active {
      color: var(--color-contrast-higher);
      border-bottom: 2px solid var(--color-contrast-higher);
    }
  }
}

</style>
