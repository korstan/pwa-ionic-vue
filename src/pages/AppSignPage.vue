<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
      <LoginForm />
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/app/auth/components/LoginForm.vue';

export default {
  name: 'home',
  components: {
    LoginForm,
  },
};
</script>
