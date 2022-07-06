import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:8080/prueba/ficha/fichaPacienteCedula'
const URIP='http://localhost:8080/prueba/paciente/cedula/'

const CompListarPacienteFichaCedula=() =>{
    const [Fichas,setFichas]=useState([])
    const [Paciente,setPaciente]=useState([])
    const [PacienteElegido,setPacienteElegido]=useState([])
    const [FichaActual,setFichaActual]=useState([])
   
    const {cedula}=useParams()
    console.log("cedulaaaaaaaaaaaaaa",cedula)
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas
    useEffect(() =>{
        getFichas()
        console.log("fichaaaaaaaaa")
    },[])
    
    const getFichas = async() =>{
       
       const res = await axios.post(URI,{cedula:cedula})
       const res2 = await axios.post(URIP,{cedula:cedula})
       setFichas(res.data)
       setPaciente(res2.data)
      
    }
 

 


    return (
        <div className="container">
            
            <div className="row">
                <div className="col">
                   
                    <th>Datos del paciente</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th> 
                                <th>Cedula</th> 
                
                                <th>Email</th> 
                                <th>Telefono</th>            
                            </tr>
                        </thead>
                        <tbody>
                           
                                <tr key={Paciente.id}>
                                    <td>{Paciente.id}</td>
                                    <td>{Paciente.nombre}</td>
                                    <td>{Paciente.apellido}</td>
                                    <td>{Paciente.cedula}</td>
                                   
                                    <td>{Paciente.email}</td>
                                    <td>{Paciente.telefono}</td>
                                   
                                    
                                </tr>
                           
                        </tbody>
                    </table>

                    <th>Especialidades</th>
                                            <table className="table">
                                                <thead className="table-primary">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nombre</th>
                                                        <th>Apellido</th>  
                                                        
                                                        <th>Especialidad</th> 
                                                       
                                                        

                                                                  
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Fichas.map ((Ficha)=>(
                                                        <tr key={Ficha.id}>
                                                            <td>{Ficha.medico.id}</td>
                                                            <td>{Ficha.medico.nombre}</td>
                                                            <td>{Ficha.medico.apellido}</td>
                                                            <td>{Ficha.medico.especialidad}</td>
                                                            
                                                            <td>
                                                                <Link to={'medico/' + Ficha.medico.id} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> VER DETALLES </Link>
                                                            </td>
                                                        
                                                         
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                </div>
            </div>
            <Link to={'cargarFicha/'} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> CREAR FICHA </Link>
            
        </div>

        
    )
}

export default CompListarPacienteFichaCedula;