import { createRouter, createWebHistory } from 'vue-router'
import Light from '../pages/Light.vue'

const routes = [
    {
        path: '/red',
        name: 'red',
        component: Light,
        props: { color: 'red', lifeTime: 10000 }
    },
    {
        path: '/yellow',
        name: 'yellow',
        component: Light,
        props: { color: 'yellow', lifeTime: 3000 }

    },
    {
        path: '/green',
        name: 'green',
        component: Light,
        props: { color: 'green', lifeTime: 15000 }
    },
    {
        path: '/',
        redirect: '/red'
    },
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from) => {
//     console.log("to", to)
//     console.log("from", from); 
//     return true
//   })

export default router
