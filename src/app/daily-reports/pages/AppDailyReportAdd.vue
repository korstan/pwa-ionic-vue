<template>
  <div class="ion-page">
    <BackFloatButton />
    <MicFloatButton />
    <DailyReportAddForm />
  </div>
</template>

<script>
import BackFloatButton from '@/components/BackFloatButton.vue';
import MicFloatButton from '@/components/MicFloatButton.vue';
import DailyReportAddForm from '@/app/daily-reports/components/DailyReportAddForm.vue';

export default {
  name: 'AppDailyReportAdd',
  components: {
    BackFloatButton,
    MicFloatButton,
    DailyReportAddForm,
  },
};
</script>

<style>
</style>
