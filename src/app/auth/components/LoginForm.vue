<template>
  <ion-grid fixed>
    <form
      action=""
      @submit.prevent="signIn"
    >
      <ion-col>
        <ion-item>
          <ion-input
            name="username"
            placeholder="Username"
            :value="credentials.username"
            @input="credentials.username = $event.target.value"
          />
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-input
            name="password"
            type="password"
            placeHolder="Password"
            :value="credentials.password"
            @input="credentials.password = $event.target.value"
          />
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button
          type="submit"
          color="primary"
          expand="block"
        >
          Sign In
        </ion-button>
      </ion-col>
    </form>
  </ion-grid>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      localStorage.setItem('loggedIn', true);
      this.$router.push('/');
    },
  },
};
</script>

<style>
</style>
