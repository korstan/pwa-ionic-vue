<template>
  <ion-item
    button
    @click="$emit('jobItemClick')"
  >
    <ion-label>
      <h2><strong>{{taskName}}</strong></h2>
      <h3>{{text}}</h3>
      <p>{{date}}</p>
    </ion-label>
  </ion-item>
</template>

<script>
export default {
  name: 'JobItem',
  props: {
    taskName: {
      type: String,
      required: true,
    },
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
