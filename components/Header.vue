<template>
  <div class="header">
    <div class="nav">
      <p class="nav__item">Dziś</p>
      <p class="nav__item active">Cały tydzień</p>
    </div>

    <div class="units">
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
import { ref, defineComponent } from 'vue';

export default defineComponent({
  props: ['activeUnits'],

  setup(props, { emit }) {
    const unit = ref('C');

    const setActive = (selectedUnit) => {
      unit.value = selectedUnit;
      emit('setActive', selectedUnit);
    };

    return {
      setActive,
      unit
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
