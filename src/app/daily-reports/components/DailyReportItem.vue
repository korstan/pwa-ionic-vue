<template>
  <ion-item
    button
    @click="$emit('reportItemClick')"
  >
    <ion-label>
      <h2><strong>[date]</strong></h2>
      <h3>Quis incididunt laboris in velit dolor deserunt.
        Cillum exercitation aute ut quis nulla cupidatat magna ad aute laborum.
        Cillum ex ex Lorem do ex culpa aute et elit ea et laboris dolor.
        In irure qui nulla cillum minim. Cupidatat nulla anim esse aliquip dolor
        exercitation sunt ea dolor nostrud ex.
        Aliqua cillum pariatur aute fugiat deserunt aliqua
        qui aliquip consectetur reprehenderit sit nostrud tempor ipsum.
        Aliqua ipsum duis ut labore.</h3>
    </ion-label>
  </ion-item>
</template>

<script>
export default {
  name: 'DailyReportItem',
};
</script>

<style>
</style>
