import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import AppSignPage from '@/pages/AppSignPage.vue';
import AppHomePage from '@/pages/AppHomePage.vue';
import AppTasks from '@/app/tasks/pages/AppTasks.vue';
import AppTaskDetails from '@/app/tasks/pages/AppTaskDetails.vue';
import AppJobs from '@/app/jobs/pages/AppJobs.vue';
import AppJobDetails from '@/app/jobs/pages/AppJobDetails.vue';
import AppJobAdd from '@/app/jobs/pages/AppJobAdd.vue';
import AppDailyReports from '@/app/daily-reports/pages/AppDailyReports.vue';
import AppDailyReportDetails from '@/app/daily-reports/pages/AppDailyReportDetails.vue';
import AppDailyReportAdd from '@/app/daily-reports/pages/AppDailyReportAdd.vue';
import AppSettings from '@/pages/menu-items/AppSettings.vue';
import AppAbout from '@/pages/menu-items/AppAbout.vue';

Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: AppSignPage,
    },
    {
      path: '/',
      name: 'home',
      component: AppHomePage,
      redirect: '/tasks',
      children: [
        {
          path: 'tasks',
          name: 'tasks',
          component: AppTasks,
        },
        {
          path: 'tasks/:id',
          name: 'taskDetails',
          component: AppTaskDetails,
        },
        {
          path: 'jobs',
          name: 'jobs',
          component: AppJobs,
        },
        {
          path: 'jobs/id/:id',
          name: 'jobDetails',
          component: AppJobDetails,
        },
        {
          path: 'jobs/add',
          name: 'addJob',
          component: AppJobAdd,
        },
        {
          path: 'daily',
          name: 'daily',
          component: AppDailyReports,
        },
        {
          path: 'daily/id/:id',
          name: 'dailyReportDetails',
          component: AppDailyReportDetails,
        },
        {
          path: 'daily/add',
          name: 'addDailyReport',
          component: AppDailyReportAdd,
        },
        {
          path: 'settings',
          name: 'settings',
          component: AppSettings,
        },
        {
          path: 'about',
          name: 'about',
          component: AppAbout,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;
