<template>
    <div class="modal-body">
        
        <!-- iterasi form input yang dibutuhkan -->
        <div v-for="(form, indexBody) in forms" :key="indexBody" class="mb-3 text-left">
            <label :htmlFor="form" class="form-label">{{ form }}</label>
            
            <!-- input Nama -->
            <div v-if="form == 'Nama'" class="form-group">
                <input  type="text" :value="nama" 
                        @input="$emit('update:nama', $event.target.value)" 
                        class="form-control" aria-describedby="namaHelp" name="nama"
                        required
                />
            </div>
            <!-- input Nomor Handphone  -->
            <input v-else-if="form == 'Nomor Handphone'" type="number" 
                    :value="noHp" @input="$emit('update:noHp', $event.target.value)" 
                    class="form-control" aria-describedby="noHpHelp" name="noHp"        
                    required
            />
            
            <!-- input Email -->
            <input v-else type="email" :value="email" 
                    @input="$emit('update:email', $event.target.value)" 
                    class="form-control" aria-describedby="emailHelp" name="email"
                    required
            />

        </div>    

    </div>
</template>

<script>
import { inject } from 'vue'


export default {
    name:"ModalBody",
    props:{
        nama: String,
        noHp: String,
        email: String,
    },
    data(){
        return {
            forms : ['Nama', 'Nomor Handphone', 'Email']
        }
    },
    emits:['update:nama', 'update:noHp', 'update:email']
}
</script>
