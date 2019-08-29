<template>
  <div class="ion-page">
    <BackFloatButton />
    <AddFloatButton @addBtnClick="routeToJobAddPage" />
    <TaskDetails />
  </div>
</template>

<script>
import BackFloatButton from '@/components/BackFloatButton.vue';
import AddFloatButton from '@/components/AddFloatButton.vue';
import TaskDetails from '@/app/tasks/components/TaskDetails.vue';

export default {
  name: 'AppTaskDetails',
  components: {
    BackFloatButton,
    AddFloatButton,
    TaskDetails,
  },
  methods: {
    routeToJobAddPage() {
      this.$router.push('/jobs/add');
    },
  },
};
</script>

<style>
</style>
