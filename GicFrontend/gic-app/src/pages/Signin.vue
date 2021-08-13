<template>
	<FormAuth v-model:email="email" v-model:password="password">
		<template v-slot:errorInput>
			<small class="form-text text-danger">{{ errorInput }}</small>
		</template>
		<template v-slot:onSubmit>
			<button type="submit" class="btn btn-primary" @click="login">
				Submit
			</button>
		</template>
	</FormAuth>
</template>

<script>
import { router } from "../main";
import axios from "axios";
import FormAuth from "../components/formAuth/FormAuth.vue";
import { inject } from "vue";

export default {
	name: "Signin",
	components: {
		FormAuth,
	},
	data() {
		return {
			email: "",
			password: "",
			errorInput: "",
		};
	},
	setup() {
		const setToken = inject("setToken");
		const setEmail = inject("setEmail");
		return {
			setEmail,
			setToken,
		};
	},
	methods: {
		login: async function () {
			try {
				const loginData = await axios.post("http://localhost:3000/login", {
					email: this.email,
					password: this.password,
				});
				localStorage.role = loginData.data.data.role;
				localStorage.email = loginData.data.data.email;
				localStorage.token = loginData.data.token;
				// setEmail(localStorage.email)
				// setToken(localStorage.token)
				router.push({ name: "home" });
				console.log("loginData ", localStorage.token);
			} catch (err) {
				this.errorInput = "*email dan password yang anda masukkan salah";
				console.log("err ", this.errorInput);
			}
		},
	},
	mounted() {
		this.setEmail(localStorage.email);
		this.setToken(localStorage.token);
	},
	beforeUnmount() {
		this.setEmail(localStorage.email);
		this.setToken(localStorage.token);
	},
};
</script>
