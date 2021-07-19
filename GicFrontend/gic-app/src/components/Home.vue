<template>
    <div class="container mt-5">
        <div class="title text-center">
            <h1>Tabel Data Kontak</h1>      
        </div>

        <!-- button input data baru  -->
        <div class="float-right my-3">
            <button type="button" class="btn btn-primary" @click="updateShowModal('tambah',0)">
                Add Data
            </button>
        </div>
        <ModalComp :operation="operation" :idComp="idxComp" />  
        <TableInfo />       
    </div>

</template>

<script>
import ModalComp from './modal/ModalComp.vue'
import TableInfo from './table/TableInfo.vue'
import { inject } from 'vue'

export default {
    name:"Home",
    components: {
        ModalComp, TableInfo
    },
    setup(){
        const showModal = inject('isShowModal')
        const operation = inject('operation')
        const idxComp = inject('idxComp')
        const updateShowModal = inject('updateShowModal')
        return{
            showModal, operation,idxComp,updateShowModal
        }
    },
}
</script>

