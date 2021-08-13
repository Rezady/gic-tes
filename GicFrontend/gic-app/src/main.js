import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home.vue";
import Signin from "./pages/Signin.vue";
import Signup from "./pages/Signup.vue";
import Profile from "./pages/profile.vue";
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
		beforeEnter: (to, from, next) => {
			if (!localStorage.token) next({ name: "signin" });
			else next();
		},
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
		beforeEnter: (to, from, next) => {
			if (!localStorage.token){
        next({ name: "signin" });
      } else if (localStorage.role !== "admin") next({name:"home"})
			else next();
		},
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
