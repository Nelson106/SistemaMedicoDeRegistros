import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const URID='http://localhost:8080/prueba/detalle'


const CompCrearFicha=() =>{
    const [Pacientes,setPacientes]=useState([])
    const [PacienteElegido,setPacienteElegido]=useState([])
    const [Motivo,setMotivo]=useState([])
    const [Diagnostico,setDiagnostico]=useState([])
    const [Tratamiento,setTratamiento]=useState([])
    useEffect(() =>{
       
    },[])
    const {fichaId}=useParams()
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas
  
  
   
    const GuardarDetalle=async(e)=>{
        e.preventDefault()
        let fecha=new Date()
        //console.log("Consultaaa",Consulta)
        
       
        
        await axios.post(URID,{
            fecha:fecha,
            motivo:Motivo,
            diagnostico:Diagnostico,
            tratamiento:Tratamiento,
            ficha:{
                 id:fichaId
             }
         })
         

        
    }
    

    return (
        <div className="container">
            <form onSubmit={GuardarDetalle}>
            <div className="row">
                <div className="col">
                   
                   <div className="mb-3">
                        <label className="form-label">Motivo de la Consulta</label>
                        <input
                            value={Motivo}
                            onChange={(e)=>setMotivo(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>

                   <div className="mb-3">
                        <label className="form-label">Diagnostico</label>
                        <input
                            value={Diagnostico}
                            onChange={(e)=>setDiagnostico(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <div className="mb-3">
                        <label className="form-label">Tratamiento</label>
                        <input
                            value={Tratamiento}
                            onChange={(e)=>setTratamiento(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Guardar detalles</button>
            </form>
        </div>

        
    )
}

export default CompCrearFicha;