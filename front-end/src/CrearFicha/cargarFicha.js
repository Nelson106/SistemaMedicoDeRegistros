import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const URIP='http://localhost:8080/prueba/paciente/'
const URIF='http://localhost:8080/prueba/ficha/'

const CompCrearFicha=() =>{
    const [Pacientes,setPacientes]=useState([])
    const [PacienteElegido,setPacienteElegido]=useState([])
    const [FichaActual,setFichaActual]=useState([])
    useEffect(() =>{
        getPacientes()
    },[])



    const {medicoId}=useParams()
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas
    console.log("medicooooo",medicoId)
    const getPacientes = async() =>{
       const res = await axios.get(URIP)
       setPacientes(res.data)
    }
   
    const GuardarFicha=async(e)=>{
        e.preventDefault()
        let fecha=new Date()
        const res=await axios.post(URIF,{
            fecha:fecha,
            paciente:{
                id:PacienteElegido
            },
             medico:{
                 id:medicoId
             }
         })
         setFichaActual(res.data)
         

       
        navigate("/medicos")
    }
    

    return (
        <div className="container">
            <form onSubmit={GuardarFicha}>
            <div className="row">
                <div className="col">
                   
                    <th>Lista de Pacientes</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>  
                                <th>Accion</th>           
                            </tr>
                        </thead>
                        <tbody>
                            {Pacientes.map ((Paciente)=>(
                                <tr key={Paciente.id}>
                                    <td>{Paciente.id}</td>
                                    <td>{Paciente.nombre}</td>
                                    <td>{Paciente.apellido}</td>
                                   
                                    <td>
                                       <input
                                            type="checkbox"
                                            value={Paciente.id}
                                            onChange={(e)=> setPacienteElegido(e.target.value)}
                                       />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

               
            </div>
            <button type="submit" className="btn btn-primary">Crear Ficha</button>
            </form>
        </div>

        
    )
}

export default CompCrearFicha;