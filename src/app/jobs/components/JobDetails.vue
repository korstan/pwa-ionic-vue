<template>
  <ion-content padding v-if="job">
    <h3>
      <ion-icon
        name="cash"
      />
      <strong>{{job.taskName}}</strong>
    </h3>
    <span>{{job.date}}</span>
    <p><strong>Project: </strong>{{job.projectName}}</p>
    <p><strong>Work Type: </strong>{{job.workTypeName}}</p>

    <p> <span
        v-for="(line, index) in parsedText"
        :key="index"
      > {{ line }} <br></span> </p>
  </ion-content>
</template>

<script>
export default {
  name: 'JobDetails',
  computed: {
    parsedText() {
      return '';
    },
  },
};
</script>

<style>
</style>
