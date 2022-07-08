import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:8080/prueba/ficha/fichaMedicoEspecialidad'
const URIM='http://localhost:8080/prueba/medico/especialidad/'

const CompListarMedicoFichaEspecialidad=() =>{
    const [Fichas,setFichas]=useState([])
    const [Medico,setMedico]=useState([])
    const [PacienteElegido,setPacienteElegido]=useState([])
    const [FichaActual,setFichaActual]=useState([])
    const {especialidad}=useParams()
    const {cedula}=useParams()
    console.log("cedulaaaaaaaaaaaaaa",cedula)
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas
    useEffect(() =>{
        getFichas()
        console.log("fichaaaaaaaaa")
    },[])
    
    const getFichas = async() =>{
       
       const res = await axios.post(URI,{especialidad:especialidad})
       const res2 = await axios.get(URIM+especialidad)
       setFichas(res.data)
       setMedico(res2.data)
      
    }
  console.log("fichaaaaaaaaa",Medico)

 


    return (
        <div className="container">
            
            <div className="row">
                <div className="col">
                   
                    <th>Datos del Médico</th>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th> 
                                <th>Cedula</th> 
                                <th>Especialidad</th>
                                <th>Email</th> 
                                <th>Telefono</th>            
                            </tr>
                        </thead>
                        <tbody>
                           
                                <tr key={Medico.id}>
                                    <td>{Medico.id}</td>
                                    <td>{Medico.nombre}</td>
                                    <td>{Medico.apellido}</td>
                                    <td>{Medico.cedula}</td>
                                    <td>{Medico.especialidad}</td>
                                    <td>{Medico.email}</td>
                                    <td>{Medico.telefono}</td>
                                   
                                    
                                </tr>
                           
                        </tbody>
                    </table>

                    <th>Datos del Paciente</th>
                                            <table className="table">
                                                <thead className="table-primary">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Nombre</th>
                                                        <th>Apellido</th>  
                                                        
                                                        <th>Email</th> 
                                                        <th>Telefono</th> 
                                                        

                                                                  
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Fichas.map ((Ficha)=>(
                                                        <tr key={Ficha.id}>
                                                            <td>{Ficha.paciente.id}</td>
                                                            <td>{Ficha.paciente.nombre}</td>
                                                            <td>{Ficha.paciente.apellido}</td>
                                                            <td>{Ficha.paciente.email}</td>
                                                            <td>{Ficha.paciente.telefono}</td>
                                                            <td>
                                                                <Link to={'paciente/' + Ficha.paciente.id} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> VER DETALLES </Link>
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

export default CompListarMedicoFichaEspecialidad;