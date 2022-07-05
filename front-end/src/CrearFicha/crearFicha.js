import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const URI='http://localhost:8080/prueba/medico/'

const CompListarMedicos=() =>{
    const [Medicos,setMedicos]=useState([])
    useEffect(() =>{
        getMedicos()
    },[])

    //procedimiento para mostrar todas las mesas

    const getMedicos = async() =>{
       const res = await axios.get(URI)
       setMedicos(res.data)
    }
    console.log("aaaaaaaaaa",Medicos);

    const deleteCliente = async(id) =>{
       await axios.delete(URI+'/'+id)
        
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col">
                 
                    <th>Lista de Medicos</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Acción</th>             
                            </tr>
                        </thead>
                        <tbody>
                            {Medicos.map ((Medico)=>(
                                <tr key={Medico.id}>
                                    <td>{Medico.id}</td>
                                    <td>{Medico.nombre}</td>
                                    <td>{Medico.apellido}</td>
                                   
                                    <td>
                                        <Link to={'fichaMedico/' + Medico.id} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> VER FICHAS </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompListarMedicos;