<template>
  <ion-item
    button
    @click="$emit('reportItemClick')"
  >
    <ion-label>
      <h2><strong>{{date}}</strong></h2>
      <h3>{{text}}</h3>
    </ion-label>
  </ion-item>
</template>

<script>
export default {
  name: 'DailyReportItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
