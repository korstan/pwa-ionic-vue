<template>
  <div class="ion-page">
    <ion-content>
      <ion-list>
        <TasksSelectBar />
        <TaskItem
          @taskItemClick="routeToTaskById(1)"
        />
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TasksSelectBar from '@/app/tasks/components/TasksSelectBar.vue';
import TaskItem from '@/app/tasks/components/TaskItem.vue';

export default {
  name: 'AppTasks',
  components: {
    TasksSelectBar,
    TaskItem,
  },
  methods: {
    ...mapActions({
      setPage: 'application/ACTIVATE_PAGE',
    }),
    routeToTaskById(id) {
      this.$router.push(`/tasks/${id}`);
    },
  },
  mounted() {
    this.setPage('Tasks');
  },
};
</script>

<style>
</style>
