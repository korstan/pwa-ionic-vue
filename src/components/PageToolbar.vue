<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-title>{{ currentPage }}</ion-title>
  </ion-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageToolbar',
  computed: {
    ...mapGetters({ currentPage: 'application/getCurrentPageTitle' }),
  },
};
</script>

<style>
</style>
