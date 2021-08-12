<template>
	<thead>
		<tr>
			<!-- iterasi header tabel -->
			<th
				v-for="(col, indexHeader) in colTable"
				:key="indexHeader"
				scope="col"
			>
				{{ col }}
			</th>
		</tr>
	</thead>
</template>

<script>
export default {
	name: "TableHeader",
	data() {
		return {
			colTable: ["#", "Nama", "Nomor Hp", "Email", "ubah", "hapus"],
		};
	},
};
</script>
