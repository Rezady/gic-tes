<template>
	<div class="modal-footer">
		<!-- kondisional button add -->
		<button
			v-if="operation == 'tambah'"
			type="submit"
			class="btn btn-primary"
			@click="tambahData"
		>
			Tambah
		</button>

		<!-- kondisional button update -->
		<button v-else type="submit" class="btn btn-primary" @click="ubahData">
			Ubah
		</button>
	</div>
</template>

<script>
import { tambahData, ubahData } from "../../crudFunction/crudFunction";

export default {
	name: "ModalFooter",
	props: {
		operation: String,
		inputModal: Object,
		idComp: Number,
	},
	methods: {
		tambahData() {
			tambahData(
				this.inputModal.inputNama,
				this.inputModal.inputNoHp,
				this.inputModal.inputEmail
			);
		},
		ubahData() {
			ubahData(
				this.idComp,
				this.inputModal.inputNama,
				this.inputModal.inputNoHp,
				this.inputModal.inputEmail
			);
			console.log("number ", this.idComp);
		},
	},
};
</script>
