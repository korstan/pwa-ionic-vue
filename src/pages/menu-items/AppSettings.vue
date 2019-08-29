<template>
  <div class="ion-page">
    "Settings" is under construction
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppSettings',
  methods: {
    ...mapActions({
      setPage: 'application/ACTIVATE_PAGE',
    }),
  },
  mounted() {
    this.setPage('Settings');
  },
};
</script>

<style>

</style>
