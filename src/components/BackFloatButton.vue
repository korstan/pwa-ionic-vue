<template>
  <ion-fab
    vertical="bottom"
    horizontal="start"
    slot="fixed"
    margin
  >
    <ion-fab-button @click="routeBack">
      <ion-icon name="arrow-round-back"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script>
export default {
  name: 'BackFloatButton',
  methods: {
    routeBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>
