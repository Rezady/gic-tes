<template>
	<tbody>
		<!-- menampilkan seluruh elemen data array  -->
		<tr v-for="(row, indexRow) in dataTable">
			<th scope="row">{{ indexRow + 1 }}</th>
			<td>{{ row.nama }}</td>
			<td>{{ row.noHp }}</td>
			<td>{{ row.email }}</td>
			<td>
				<!-- mengaktifkan modal form update -->
				<button
					type="button"
					class="btn btn-success"
					@click="updateShowModal('ubah', row.id)"
				>
					Ubah
				</button>
			</td>
			<td>
				<!-- menghapus row table -->
				<button
					type="button"
					class="btn btn-danger"
					@click="hapusRow(row.id)"
				>
					Hapus
				</button>
			</td>
		</tr>
	</tbody>
</template>

<script>
import { hapusData, tampilData } from "../../crudFunction/crudFunction";
import { inject } from "vue";

export default {
	name: "TableBody",
	setup() {
		const updateShowModal = inject("updateShowModal");
		const dataTable = inject("dataTable");
		const showData = inject("showData");
		return {
			updateShowModal,
			dataTable,
			showData,
		};
	},
	methods: {
		hapusRow: function (id) {
			hapusData(id);
		},
	},
	async mounted() {
		await tampilData(this.showData);
	},
};
</script>
