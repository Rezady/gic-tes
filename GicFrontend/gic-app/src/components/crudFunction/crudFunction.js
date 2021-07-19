import axios from 'axios'

// menampilkan value ke tabel
export async function tampilData(fn){
    try{
        const response = await axios.get('http://localhost:3000/daftar')
        const result = await response.data.data
        fn(result)
    }catch(err){
        console.log(err)
    }
}

// call api dan menambahkan rocords ke tabel
export function tambahData(nama, noHp, email){
    axios.post('http://localhost:3000/buat', {
            nama: nama,
            noHp: noHp,
            email: email
        })
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            if (error.response) {
                // Request made and server responded
                console.log('error response ',error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log('error request ', error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        })
}

// call api dan update record
export function ubahData(id, nama, noHp, email){
    axios.post('http://localhost:3000/ubah', {
            id:id,
            nama: nama,
            noHp: noHp,
            email: email
        })
        .catch(function (error) {
            // handle error
            console.log('err ', error);
        })
}

// menghapus record
export function hapusData(id){
    axios.post('http://localhost:3000/hapus', {
            id:id
            })
            .then(function (response) {
                window.location.reload();
            })
            .catch(function (error) {
                // handle error
                console.log('err ', error);
            })
}

