<template>
  <form
    class="ion-padding"
    @submit="onSubmitJob"
  >
    <MicFloatButton />
    <ion-item>
      <ion-label color="medium">
        <strong> Task </strong> {{ task.title }} <br>
        <strong> Task ID </strong> {{ task.taskID }}
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Billable</ion-label>
      <ion-checkbox
        :value="billable"
        @ionChange="billable=$event.target.checked"
        slot="start"
      ></ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-label>Work Day</ion-label>
      <ion-datetime
        min="2007-01-01"
        :value="workDay"
        @ionChange="workDay = $event.target.value"
      ></ion-datetime>
    </ion-item>
    <ion-item>
      <ion-label
        position="fixed"
        slot="start"
      >Duration</ion-label>
      <ion-datetime
        display-format="HH:mm"
        :value="duration"
        @ionChange="duration = $event.target.value"
      ></ion-datetime>
    </ion-item>
    <ion-textarea
      :value="jobText"
      @input="jobText = $event.target.value"
      name="jobTextarea"
      rows="10"
      maxlength="1024"
      placeholder="Enter new job information here..."
    ></ion-textarea>
    <ion-button
      type="submit"
      expand="block"
    >
      Submit
    </ion-button>
  </form>
</template>

<script>
import axios from 'axios';
import MicFloatButton from '@/components/MicFloatButton.vue';

export default {
  name: 'JobAddForm',
  components: {
    MicFloatButton,
  },
  data() {
    return {
      micIsEnabled: false,
      jobText: '',
      billable: false,
      workDay: new Date().toISOString(),
      duration: 0,
    };
  },
  subscriptions: {},
  methods: {
    getDurationInMinutes(isoString) {
      return (
        new Date(isoString).getMinutes() + new Date(isoString).getHours() * 60
      );
    },
    onSubmitJob(e) {
      e.preventDefault();
      axios
        .post('', {})
        .then(() => this.$router.go(-1))
        .catch((error) => {
          this.presentSubmitJobAlert(error);
        });
    },
    presentSubmitJobAlert(message) {
      console.log(message);
      return this.$ionic.alertController
        .create({
          header: 'ERROR',
          message,
          buttons: ['OK'],
        })
        .then(a => a.present());
    },
  },
};
</script>

<style>
</style>
