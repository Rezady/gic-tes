<template>
    <router-link :to="{ name: 'home' }">
	    <a class="navbar-brand text-light">Gic Contact</a>
    </router-link >
	<router-link v-if="roleActive == 'admin'" :to="{ name: 'profile' }">
		<a class="nav-link text-light">Profile</a>
	</router-link>
	<button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon"></span>
	</button>
</template>

<script>
import { inject } from "vue";
export default {
	name: "LeftNavbar",
	setup() {
		const roleActive = inject("roleActive");
		const setRole = inject("setRole");
		return {
			roleActive,
			setRole,
		};
	},
    mounted(){
        this.setRole(localStorage.role)
    },
    beforeUnmount(){
        this.setRole(localStorage.role)
    }
};
</script>
