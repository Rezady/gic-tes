<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue'
import { provide, ref} from 'vue'

export default {
  name: 'App',
  components: {
    Home
  },
  // global State
  setup() {
    const isShowModal = ref(false)
    const operation = ref("")
    const idxComp = ref(0)
    const dataTable = ref([])
    
    const updateShowModal = (valOp, valId) => {
      isShowModal.value = !isShowModal.value
      operation.value = valOp
      idxComp.value = valId
    }

    const showData = (data) => {
      dataTable.value = data
    }

    provide('dataTable',dataTable)
    provide('isShowModal', isShowModal)
    provide('idxComp', idxComp)
    provide('operation', operation)
    provide('showData', showData)
    provide('updateShowModal', updateShowModal)
  },
}
</script>
