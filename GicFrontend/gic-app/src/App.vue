<template>
	<div class="container p-5">
		<nav class="navbar navbar-expand-lg navbar-light bg-secondary rounded">
			<left-navbar />
			<right-navbar />
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
import Home from "./pages/Home.vue";
import Profile from "./pages/Profile.vue";
import { provide, ref } from "vue";
import RightNavbar from "./components/navbar/RightNavbar.vue";
import LeftNavbar from "./components/navbar/LeftNavbar.vue";

export default {
	name: "App",
	components: {
		Home,
		RightNavbar,
		Profile,
		LeftNavbar,
	},

	// global State
	setup() {
		const isShowModal = ref(false);
		const operation = ref("");
		const idxComp = ref(0);
		const dataTable = ref([]);
		const roleActive = ref("");
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

		const setRole = (role) => {
			roleActive.value = role;
		};

		const setToken = (token) => {
			tokenActive.value = token;
		};

		const setEmail = (email) => {
			emailActive.value = email;
		};

		provide("emailActive", emailActive);
		provide("tokenActive", tokenActive);
		provide("roleActive", roleActive);
		provide("dataTable", dataTable);
		provide("isShowModal", isShowModal);
		provide("idxComp", idxComp);
		provide("operation", operation);
		provide("showData", showData);
		provide("setToken", setToken);
		provide("setRole", setRole);
		provide("setEmail", setEmail);
		provide("updateShowModal", updateShowModal);
	},
};
</script>
