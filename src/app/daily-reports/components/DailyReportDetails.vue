<template>
  <ion-content padding>
    <h4>{{ report.date }}</h4>
    <p> <span
        v-for="(line, index) in parsedText"
        :key="index"
      > {{ line }} <br></span> </p>
  </ion-content>
</template>

<script>
export default {
  name: 'DailyReportDetails',
};
</script>

<style>
</style>
