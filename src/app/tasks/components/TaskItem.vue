<template>
  <ion-item
    button
    @click="$emit('taskItemClick')"
  >
    <ion-label>
      <h2><strong>Title</strong></h2>
      <h3>HugeProject</h3>
      <p>Mollit sint duis commodo amet laboris ea anim anim duis ullamco laborum. Ea et do deserunt et.
        Velit cillum laboris dolore proident minim reprehenderit deserunt deserunt. Proident nulla eu sint velit elit
        aliquip nostrud elit exercitation ut ipsum laboris velit commodo. Anim reprehenderit ea amet nulla aliqua sint in tempor
        exercitation elit id ullamco exercitation nisi.</p>
    </ion-label>
  </ion-item>
</template>

<script>
export default {
  name: 'JobItem',
};
</script>

<style>
</style>
