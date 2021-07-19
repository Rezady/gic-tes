<template>
    <!-- tabel informasi Halaman Home -->
    <table class="table table-striped">
        <table-header />
        <table-body />
    </table>
</template>

<script>
import TableHeader from './part-table/TableHeader.vue'
import TableBody from './part-table/TableBody.vue'

export default {
    name:"TableInfo",
    components:{
        TableHeader, TableBody
    },
}
</script>
