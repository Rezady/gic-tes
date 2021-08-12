<template>
	<div class="modal-header">
		<h5 class="modal-title">{{ operation }} data</h5>
		<!-- button close -->
		<span class="close-button" @click="updateShowModal(operation, idComp)"
			>&times;</span
		>
	</div>
</template>

<style scoped>
@import "../modal.css";
</style>

<script>
import { inject } from "vue";
export default {
	name: "ModalHeader",
	props: {
		operation: String,
		idComp: Number,
	},
	setup() {
		const updateShowModal = inject("updateShowModal");
		return {
			updateShowModal,
		};
	},
};
</script>
