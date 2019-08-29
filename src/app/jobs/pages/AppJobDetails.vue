<template>
  <div class="ion-page">
    <BackFloatButton />
    <JobDetails />
  </div>
</template>

<script>
import BackFloatButton from '@/components/BackFloatButton.vue';
import JobDetails from '@/app/jobs/components/JobDetails.vue';

export default {
  name: 'AppJobDetails',
  components: {
    JobDetails,
    BackFloatButton,
  },
};
</script>

<style>
</style>
