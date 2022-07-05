import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import './input.css';
const URID='http://localhost:8080/prueba/detalle'


const CompCrearFicha=() =>{
    const [Especialidad,setEspecialidad]=useState([])
    const [PacienteElegido,setPacienteElegido]=useState([])
    const [Motivo,setMotivo]=useState([])
    const [Diagnostico,setDiagnostico]=useState([])
    const [Tratamiento,setTratamiento]=useState([])
    const [Medico,setMedico]=useState([])
    useEffect(() =>{
       
    },[])
    const {fichaId}=useParams()
    
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas
  
  
   
    const GuardarDetalle=async(e)=>{
        e.preventDefault()
        let fecha=new Date()
        //console.log("Consultaaa",Consulta)
        
       
        
       /* await axios.post(URID,{
            fecha:fecha,
            motivo:Motivo,
            diagnostico:Diagnostico,
            tratamiento:Tratamiento,
            ficha:{
                 id:fichaId
             }
         })*/

         navigate("especialidad/"+Especialidad)
         

        
    }
    

    return (
        <div className="container">
            
                
            <div className=" row">
                <div className="input-group col">
                <form onSubmit={GuardarDetalle}>
                   <div className=" mb-3">
                        <label className="form-label">Filtro por texto</label>
                        <input 
                            value={Motivo}
                            onChange={(e)=>setMotivo(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   
                     <Link to={'especialidad/' + Especialidad} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> BUSCAR </Link>
            
                 </form>
                <form onSubmit={GuardarDetalle}>
                   <div className=" mb-3">
                        <label className="form-label">Especialidad del médico</label>
                        <input 
                            value={Especialidad}
                            onChange={(e)=>setEspecialidad(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <Link to={'especialidad/' + Especialidad} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> BUSCAR </Link>
                 </form>
                
                 <form onSubmit={GuardarDetalle}>
                   <div className=" mb-3">
                        <label className="form-label">Médico</label>
                        <input 
                            value={Medico}
                            onChange={(e)=>setMedico(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <Link to={'medico/' + Medico} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> BUSCAR </Link>
                 </form>
                 <form onSubmit={GuardarDetalle}>
                   <div className=" mb-3">
                        <label className="form-label">Paciente</label>
                        <input 
                            value={Motivo}
                            onChange={(e)=>setMotivo(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <button type="submit" className="btn btn-primary">Guardar detalles</button>
                 </form>
                 <form onSubmit={GuardarDetalle}>
                   <div className=" mb-3">
                        <label className="form-label">Fecha de la ficha</label>
                        <input 
                            value={Motivo}
                            onChange={(e)=>setMotivo(e.target.value)}
                            type="date"
                            className="form-control"
                        />
                   </div>
                   <button type="submit" className="btn btn-primary">Guardar detalles</button>
                 </form>
                </div>
            </div>
           
        </div>

        
    )
}

export default CompCrearFicha;