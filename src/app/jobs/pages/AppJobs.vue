<template>
  <div class="ion-page">
    <ion-content>
      <ion-list>
        <JobItem
        />
      </ion-list>
      <AddFloatButton/>
    </ion-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import JobItem from '@/app/jobs/components/JobItem.vue';
import AddFloatButton from '@/components/AddFloatButton.vue';

export default {
  name: 'AppJobs',
  components: {
    JobItem,
    AddFloatButton,
  },
  methods: {
    ...mapActions({
      setPage: 'application/ACTIVATE_PAGE',
    }),
    routeToJobById(id) {
      this.$router.push(`/jobs/id/${id}`);
    },
    presentAddGuideAlert() {
      return this.$ionic.alertController
        .create({
          header: 'To add job:',
          message: 'Select the task you want to add from "Tasks" page and tap Add button',
          buttons: ['OK'],
        })
        .then(a => a.present());
    },
  },
  mounted() {
    this.setPage('Jobs');
  },
};
</script>

<style>
</style>
