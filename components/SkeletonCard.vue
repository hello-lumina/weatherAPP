<script  lang="js">

</script>

<template>
  <div class="skeleton-loading-card">

  </div>
</template>

<style  lang="scss">

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
