<template>
  <ion-item>
    <ion-label>Show</ion-label>
    <ion-select interface="popover" @ionChange="onShowModeChange">
      <ion-select-option
        value="my"
      >My Tasks</ion-select-option>
      <ion-select-option
        value="all"
      >All Tasks</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
export default {
  name: 'TasksSelectBar',
  methods: {
    onShowModeChange(event) {
      this.$emit('showModeChanged', event.detail.value);
    },
  },
};
</script>

<style>
</style>
