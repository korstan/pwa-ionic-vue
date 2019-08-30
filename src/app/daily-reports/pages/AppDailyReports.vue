<template>
  <div class="ion-page">
    <AddFloatButton @addBtnClick="routeToAddDailyPage" />
    <ion-content>
      <ion-list>
        <DailyReportItem
          @reportItemClick="routeToReportById(1)"
        />
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AddFloatButton from '@/components/AddFloatButton.vue';
import DailyReportItem from '@/app/daily-reports/components/DailyReportItem.vue';

export default {
  name: 'AppDailyReport',
  components: {
    AddFloatButton,
    DailyReportItem,
  },
  methods: {
    ...mapActions({
      setPage: 'application/ACTIVATE_PAGE',
    }),
    routeToReportById(id) {
      this.$router.push(`/daily/id/${id}`);
    },
    routeToAddDailyPage() {
      this.$router.push('/daily/add');
    },
  },
  mounted() {
    this.setPage('Daily Reports');
  },
};
</script>

<style>
</style>
