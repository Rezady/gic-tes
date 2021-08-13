<template>
	<h1>halaman admin</h1>
</template>

<script>
import { inject} from "vue";
export default {
    name:"profile",
    setup(){
        const tokenActive = inject("tokenActive");
		const emailActive = inject("emailActive");
        const roleActive = inject("roleActive");
		const setToken = inject("setToken");
		const setEmail = inject("setEmail");
        const setRole = inject('setRole')
		return {
			tokenActive,
			setEmail,
			setToken,
            setRole,
			emailActive,
            roleActive,
		};
    },
    mounted() {
		this.setEmail(localStorage.email);
		this.setToken(localStorage.token);
		this.setRole(localStorage.role);
	},
	beforeUnmount(){
		this.setEmail(localStorage.email);
		this.setToken(localStorage.token);
		this.setRole(localStorage.role);
	}
}
</script>
