<template>
  <div class="ion-page">
    <ion-header>
      <PageToolbar />
    </ion-header>
    <ion-content class="ion-padding">
      <ion-vue-router />
    </ion-content>
  </div>
</template>

<script>
import PageToolbar from '@/components/PageToolbar.vue';

export default {
  name: 'AppHomePage',
  components: {
    PageToolbar,
  },
};
</script>

<style>
</style>
