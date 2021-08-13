<template>
	<div class="container mt-5">
		<div class="title text-center">
			<h1>Tabel Data Kontak</h1>
		</div>

		<!-- button input data baru  -->
		<div class="float-right my-3">
			<button
				type="button"
				class="btn btn-primary"
				@click="updateShowModal('tambah', 0)"
			>
				Add Data
			</button>
		</div>
		<ModalComp :operation="operation" :idComp="idxComp" />
		<TableInfo />
	</div>
</template>

<script>
import ModalComp from "../components/modal/ModalComp.vue";
import TableInfo from "../components/table/TableInfo.vue";
import { inject } from "vue";

export default {
	name: "Home",
	components: {
		ModalComp,
		TableInfo,
	},
	setup() {
		const showModal = inject("isShowModal");
		const operation = inject("operation");
		const idxComp = inject("idxComp");
		const updateShowModal = inject("updateShowModal");
		const setEmail = inject("setEmail");
		const setToken = inject("setToken");
		const setRole = inject('setRole')
		return {
			showModal,
			operation,
			idxComp,
			updateShowModal,
			setEmail,
			setToken,
			setRole,
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
};
</script>
