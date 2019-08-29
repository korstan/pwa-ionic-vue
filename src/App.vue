<template>
  <div id="app">
    <ion-app>
      <SlideMenu />
      <ion-vue-router main/>
    </ion-app>
    <ion-menu-controller></ion-menu-controller>
  </div>
</template>

<script>
import SlideMenu from '@/app/menu/components/SlideMenu.vue';

export default {
  components: {
    SlideMenu,
  },
};
</script>
