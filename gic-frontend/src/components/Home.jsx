import { useState,useEffect } from "react"
import ModalComp from './modal/ModalComp'
import {hapusData, tampilData, tambahData, ubahData} from '../crudFunction/crudFunction.js'

function Home(){
    const [data, setData] = useState([])

    useEffect(() => {
            tampilData(setData)
    },[])
    
    return(
        <div className="container mt-5">

            <div className="title text-center">
                <h1>Tabel Data Kontak</h1>      
            </div>

            {/* button input data baru */}
            <div className="float-end my-3">
                <button type="button" className="btn btn-primary"
                        data-bs-toggle="modal" data-bs-target="#tambah0"
                >
                    Add Data
                </button>
            </div>

            {/* modal */}
            <ModalComp button="tambah" onClick={(idComp, nama, noHp, email)=>
                        tambahData(idComp, nama, noHp, email)} idComp="0"
                        />

            {/* tabel informasi  */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Nomor Hp</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ubah</th>
                        <th scope="col">Hapus</th>
                    </tr>
                </thead>

                <tbody>

                    {/* menampilkan seluruh elemen data array */}
                    {
                        data.map((val,idx) => (
                            <tr id={val.id} key={idx}>
                                <th scope="row" key={idx+1}>{idx+1}</th>
                                <td key={idx+2}>{val.nama}</td>
                                <td key={idx+3}>{val.noHp}</td>
                                <td key={idx+4}>{val.email}</td>
                                <td key={idx+5}>
                                    <button type="button" className="btn btn-success" 
                                            data-bs-toggle="modal" data-bs-target={`#ubah${val.id}`}
                                    >
                                        Ubah
                                    </button>
                                    <ModalComp button="ubah" onClick=
                                                {(id, nama, noHp, email) => ubahData(id, nama, noHp, email)}
                                                idComp= {val.id}
                                                nama= {val.nama}
                                                noHp= {val.noHp}
                                                email= {val.email}
                                    />
                                </td>
                                <td key={idx+6}>
                                    <button type="button" className="btn btn-danger" 
                                            onClick={() => hapusData(val.id)}
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>        
                            )
                        )
                    }
                                     
                </tbody>
            </table>

        </div>
    )
}

export default Home