<template>
	<div class="container p-5">
		<nav class="navbar navbar-expand-lg navbar-light bg-secondary rounded">
			<a class="navbar-brand text-light">Gic Contact</a>
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

			<right-navbar />
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
import Home from "./pages/Home.vue";
import Login from "./pages/Signin.vue";
import { provide, ref } from "vue";

import RightNavbar from "./components/navbar/RightNavbar.vue";

export default {
	name: "App",
	components: {
		Home,
		RightNavbar,
	},

	// global State
	setup() {
		const isShowModal = ref(false);
		const operation = ref("");
		const idxComp = ref(0);
		const dataTable = ref([]);
		const tokenActive = ref("");
		const emailActive = ref("");
		const updateShowModal = (valOp, valId) => {
			isShowModal.value = !isShowModal.value;
			operation.value = valOp;
			idxComp.value = valId;
		};

		const showData = (data) => {
			dataTable.value = data;
		};

		const setToken = (token) => {
			tokenActive.value = token;
		};

		const setEmail = (email) => {
			emailActive.value = email;
		};

		provide("emailActive", emailActive);
		provide("tokenActive", tokenActive);
		provide("dataTable", dataTable);
		provide("isShowModal", isShowModal);
		provide("idxComp", idxComp);
		provide("operation", operation);
		provide("showData", showData);
		provide("setToken", setToken);
		provide("setEmail", setEmail);
		provide("updateShowModal", updateShowModal);
	},
};
</script>
