<template>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto"></ul>
		<form class="form-inline my-2 my-lg-0">
			<ul v-if="!tokenActive" class="navbar-nav mr-auto">
				<li class="nav-item active">
					<router-link :to="{ name: 'signin' }">
						<a class="nav-link text-light">Signin</a>
					</router-link>
				</li>
				<li class="nav-item active">
					<router-link :to="{ name: 'signup' }">
						<a class="nav-link text-light">Signup</a>
					</router-link>
				</li>
			</ul>
			<ul v-else class="navbar-nav mr-auto">
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle text-light"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						{{ emailActive }}
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" @click="logout">Logout</a>
					</div>
				</li>
			</ul>
		</form>
	</div>
</template>

<script>
import { router } from "../../main";
import { inject } from "vue";
export default {
	name: "RightNavbar",
	setup() {
		const tokenActive = inject("tokenActive");
		const emailActive = inject("emailActive");
		const setToken = inject("setToken");
		const setEmail = inject("setEmail");
		return {
			tokenActive,
			setEmail,
			setToken,
			emailActive,
		};
	},
	methods: {
		logout() {
			localStorage.clear();
			this.setEmail(localStorage.email);
			this.setToken(localStorage.token);
			router.push({ name: "signin" });
		},
	},
};
</script>
