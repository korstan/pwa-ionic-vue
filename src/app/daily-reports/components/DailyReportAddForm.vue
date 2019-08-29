<template>
  <form
    class="ion-padding"
    @submit="onSubmitReport"
  >
    <ion-item>
      <ion-label>Day</ion-label>
      <ion-datetime
        :value="date"
        @ionChange="date = $event.target.value"
        min="2007-01-01"
      ></ion-datetime>
    </ion-item>
    <ion-textarea
      :value="reportText"
      @input="reportText = $event.target.value"
      name="reportTextarea"
      rows="10"
      maxlength="1024"
      placeholder="Enter new information here..."
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

export default {
  name: 'DailyReportAddForm',
  data() {
    return {
      reportText: '',
      date: null,
    };
  },
  methods: {
    onSubmitReport(e) {
      e.preventDefault();
      axios
        .post('', {});
    },
    presentSubmitReportAlert(message) {
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
