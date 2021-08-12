<template>
	<!-- modal akan aktif jika isShowModal true -->
	<div v-show="isShowModal" class="modal-comp" :id="idComp">
		<div class="modal-content">
			<!-- part header -->
			<modal-header :operation="operation" :idComp="idComp" />
			<form>
				<!-- part input form -->
				<modal-body
					v-model:nama="inputModal.inputNama"
					v-model:no-hp="inputModal.inputNoHp"
					v-model:email="inputModal.inputEmail"
				></modal-body>
				<!-- part footer -->
				<modal-footer
					:operation="operation"
					:inputModal="inputModal"
					:idComp="idComp"
				/>
			</form>
		</div>
	</div>
</template>

<style scoped>
@import "./modal.css";
</style>

<script>
import ModalBody from "./part-modal/ModalBody.vue";
import ModalFooter from "./part-modal/ModalFooter.vue";
import { inject } from "vue";
import ModalHeader from "./part-modal/ModalHeader.vue";

export default {
	name: "ModalComp",
	components: {
		ModalBody,
		ModalFooter,
		ModalHeader,
	},
	props: {
		operation: String,
		idComp: Number,
	},
	setup() {
		const isShowModal = inject("isShowModal");
		return {
			isShowModal,
		};
	},
	data() {
		return {
			inputModal: {
				inputNama: "",
				inputNoHp: "",
				inputEmail: "",
			},
		};
	},
};
</script>
