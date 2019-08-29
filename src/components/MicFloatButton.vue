<template>
  <ion-fab
    vertical="bottom"
    horizontal="end"
    slot="fixed"
    margin
  >
    <ion-fab-button @click="$emit('micBtnClick')">
      <ion-icon name="mic"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script>
export default {
  name: 'MicFloatButton',
};
</script>

<style>
</style>
