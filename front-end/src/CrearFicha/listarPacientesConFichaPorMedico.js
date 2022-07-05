import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const URIP='http://localhost:8080/prueba/paciente/'
const URIF='http://localhost:8080/prueba/ficha/fichaMedico'

const CompListarFicha=() =>{
    const [Fichas,setFichas]=useState([])
    const [PacienteElegido,setPacienteElegido]=useState([])
    const [FichaActual,setFichaActual]=useState([])
    useEffect(() =>{
        getFichas()
    },[])
    const {medicoId}=useParams()
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas
    
    const getFichas = async() =>{
       const res = await axios.get(URIF+"/"+medicoId)
       setFichas(res.data)
    }
   
    console.log("Fichaaaaaa",Fichas)
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
         

         console.log("actuaal",res)
        /* await axios.post(URIF,{
            fecha:fecha,
            paciente:{
                id:PacienteElegido
            },
             medico:{
                 id:medicoId
             }
         })*/
        // navigate("/medicos/medicos/"+medicoId+"/ficha/"+fichaId)
    }
    

    return (
        <div className="container">
            <form onSubmit={GuardarFicha}>
            <div className="row">
                <div className="col">
                   
                    <th>Lista de Fichas</th>
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
                            {Fichas.map ((Ficha)=>(
                                <tr key={Ficha.id}>
                                    <td>{Ficha.paciente.id}</td>
                                    <td>{Ficha.paciente.nombre}</td>
                                    <td>{Ficha.paciente.apellido}</td>
                                   
                                    <td>
                                        <Link to={'ficha/' + Ficha.id} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> CARGAR DETALLES </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to={'cargarFicha/'} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> CREAR FICHA </Link>
            </form>
        </div>

        
    )
}

export default CompListarFicha;