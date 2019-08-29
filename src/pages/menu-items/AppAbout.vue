<template>
  <div class="ion-page">
    "About" is under construction
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppAbout',
  methods: {
    ...mapActions({
      setPage: 'application/ACTIVATE_PAGE',
    }),
  },
  mounted() {
    this.setPage('About');
  },
};
</script>

<style>
</style>
