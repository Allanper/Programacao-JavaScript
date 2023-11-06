// Composables
import { createRouter, createWebHistory } from 'vue-router';
import ProductList from "@/views/ProductList";
import NewUser from "@/views/NewUser";
import Contact from "@/views/Contact";


const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path:'/user',
    component: NewUser,
  },
  {
    path:'/contact',
    component: Contact,
  },
  {
    path:'/product',
    component: ProductList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
