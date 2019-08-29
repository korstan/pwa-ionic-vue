<template>
  <div class="ion-page">
    <BackFloatButton />
    <DailyReportDetails />
  </div>
</template>

<script>
import BackFloatButton from '@/components/BackFloatButton.vue';
import DailyReportDetails from '@/app/daily-reports/components/DailyReportDetails.vue';

export default {
  name: 'AppDailyReportDetails',
  components: {
    DailyReportDetails,
    BackFloatButton,
  },
};
</script>

<style>
</style>
