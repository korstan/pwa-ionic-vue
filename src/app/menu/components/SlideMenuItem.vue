<template>
  <ion-item
    button
    @click="$emit('menuItemClick')"
  >
    <ion-icon
      v-if="icon"
      :name="icon"
      slot="start"
    ></ion-icon>
    <ion-label>
      <slot>
        Menu Item
      </slot>
    </ion-label>
  </ion-item>
</template>

<script>
export default {
  name: 'SlideMenuItem',
  props: {
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
</style>
