<template>
  <ion-item
    button
    @click="$emit('jobItemClick')"
  >
    <ion-label>
      <h2><strong>Task Title</strong></h2>
      <h3>Voluptate voluptate quis laborum et incididunt veniam elit in adipisicing sit.
        Incididunt mollit ut tempor minim aute pariatur voluptate aliqua in eiusmod aliqua.
        Officia fugiat in anim non Lorem nostrud cupidatat cillum nulla dolor ex ullamco in anim.
        Eiusmod officia id eu duis tempor adipisicing ullamco.
        Elit enim duis qui enim voluptate.</h3>
      <p>2000.01.01</p>
    </ion-label>
  </ion-item>
</template>

<script>
export default {
  name: 'JobItem',
};
</script>

<style>
</style>
