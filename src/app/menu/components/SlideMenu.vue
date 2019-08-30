<template>
  <ion-menu
    side="start"
    menu-id="slide"
    swipe-gesture="false"
  >
    <ion-header>
      <SlideUserInfo />
    </ion-header>
    <ion-content>
      <ion-list>
        <SlideMenuItem
          @menuItemClick="routeToPath('/tasks')"
          :icon="'today'"
        >Tasks</SlideMenuItem>
        <SlideMenuItem
          @menuItemClick="routeToPath('/jobs')"
          :icon="'checkmark-circle'"
        >Jobs</SlideMenuItem>
        <SlideMenuItem
          @menuItemClick="routeToPath('/daily')"
          :icon="'clipboard'"
        >Daily Reports</SlideMenuItem>
        <SlideMenuItem
          @menuItemClick="routeToPath('/settings')"
          :icon="'construct'"
        >Settings</SlideMenuItem>
        <SlideMenuItem
          @menuItemClick="routeToPath('/about')"
          :icon="'information-circle'"
        >About</SlideMenuItem>
        <SlideMenuItem
          @menuItemClick="signOutAndExit"
          :icon="'log-out'"
        >Sign Out</SlideMenuItem>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import SlideUserInfo from '@/app/menu/components/SlideUserInfo.vue';
import SlideMenuItem from '@/app/menu/components/SlideMenuItem.vue';

export default {
  name: 'SlideMenu',
  components: {
    SlideMenuItem,
    SlideUserInfo,
  },
  methods: {
    routeToPath(routePath) {
      this.$ionic.menuController
        .close()
        .then(() => this.$router.push(routePath));
    },
    signOutAndExit() {
      localStorage.removeItem('loggedIn');
      this.$ionic.menuController
        .close()
        .then(() => this.$router.push('/login'));
    },
  },
};
</script>

<style>
</style>
