import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home.vue";
import Signin from "./pages/Signin.vue";
import Signup from "./pages/Signup.vue";

const routes = [
    {
      path: "/",
      name: "signin",
      component: Signin,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
  ];
  
 export const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).mount('#app')
