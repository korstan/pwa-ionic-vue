<template>
  <div class="ion-page">
    <BackFloatButton />
    <JobAddForm />
  </div>
</template>

<script>
import BackFloatButton from '@/components/BackFloatButton.vue';
import JobAddForm from '@/app/jobs/components/JobAddForm.vue';

export default {
  name: 'AppJobAdd',
  components: {
    BackFloatButton,
    JobAddForm,
  },
  methods: {},
};
</script>

<style>
</style>
