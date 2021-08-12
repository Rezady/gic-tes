<template>
	<FormAuth
		v-model:email="email"
		v-model:password="password"
		v-model:role="role"
	>
		<template v-slot:roleInput>
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<label class="input-group-text" for="inputGroupSelect01"
						>Role</label
					>
				</div>
				<select
					class="custom-select"
					id="inputGroupSelect01"
					v-model="role"
				>
					<option selected>Choose...</option>
					<option value="admin">Admin</option>
					<option value="user">User</option>
				</select>
			</div>
		</template>
		<template v-slot:onSubmit>
			<button type="submit" class="btn btn-primary" @click="signup">
				Submit
			</button>
		</template>
	</FormAuth>
</template>
<script>
import axios from 'axios'
import FormAuth from "../components/formAuth/FormAuth.vue";
export default {
	name: "Signup",
	components: {
		FormAuth,
	},
	data() {
		return {
			email: "",
			password: "",
			role: "",
		};
	},
	methods: {
		signup: async function () {
			try {
				const loginData = await axios.post("http://localhost:3000/register", {
					email: this.email,
					password: this.password,
                    role: this.role,
				});
				console.log("loginData ", await loginData.data);
			} catch (err) {
				// this.errorInput = "*email dan password yang anda masukkan salah";
				console.log("err ", err);
			}
		},
	},
};
</script>
