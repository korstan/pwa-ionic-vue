<template>
  <ion-fab
    vertical="bottom"
    horizontal="end"
    slot="fixed"
    margin
  >
    <ion-fab-button @click="$emit('addBtnClick')">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script>
export default {
  name: 'AddFloatButton',
};
</script>

<style>
</style>
