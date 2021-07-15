import { useState } from "react"

function ModalComp(props){
    const propsButton = props.button
    const idComp = props.idComp
    const [nama, setNama] = useState(props.nama)
    const [noHp, setNoHp] = useState(props.noHp)
    const [email, setEmail] = useState(props.email)

    return(
        <div className="modal fade" id={propsButton+`${idComp}`} tabIndex="-1" 
            aria-labelledby="modalLabel{props.button}" aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {propsButton} data
                        </h5>
                        <button type="button" className="btn-close" 
                                data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <form className="needs-validation novalidate">
                        <div className="modal-body">
                            
                            {/* input nama */}
                            <div className="mb-3 has-validation">
                                <label htmlFor="inputNama" className="form-label">Nama</label>
                                <input type="text" className="form-control" id="inputNama" 
                                        aria-describedby="namaHelp" name="nama" value={nama}
                                        onChange={(e) => setNama(e.target.value)} placeholder="nama" 
                                        required                                   
                                />                          
                            </div>    

                            {/* input nomor hp */}
                            <div className="mb-3">
                                <label htmlFor="inputNoHp" className="form-label">Nomor Hp</label>
                                <input type="number" className="form-control" id="inputNoHp" 
                                        aria-describedby="noHpHelp" name="noHp" value={noHp}
                                        onChange={(e) => setNoHp(e.target.value)} 
                                        required
                                />                            
                            </div>
                            
                            {/* input email */}
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" 
                                        aria-describedby="emailHelp" name="email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required                                
                                />                            
                            </div>
                                                
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" 
                                    data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary" 
                                    onClick={() => props.onClick(idComp, nama, noHp, email) }  
                            >
                                {propsButton}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalComp