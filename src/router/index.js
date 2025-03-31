import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      redirect:'c-oj/home/question',
    },
    {
      path:"/c-oj/home",
      name:"home",
      component:()=>import("@/views/Home.vue"),
      children:[
        {
          path: 'question',
          name: 'question',
          component: () => import('@/views/Question.vue'),
          meta: {showBanner: true}
        },
        {
          path: 'exam',
          name: 'exam',
          component: () => import('@/views/Exam.vue'),
          meta: {showBanner: true}
        },
        {
          path:'user/exam',
          name:'useExam',
          component:()=>import('@/views/UserExam.vue'),
          meta: {showBanner: false}
        },
        {
          path:'user/detail',
          name:'userDetail',
          component:()=>import('@/views/UserExam.vue'),
          meta: {showBanner: false}
        },
      ]
    },
    {
      path:"/c-oj/login",
      name:"login",
      component:()=>import("@/views/Login.vue")
    },
    {
      path: "/c-oj/anwser",
      name: "anwser",
      component: () => import("@/views/Answer.vue"),
    },
  ],
})

export default router
