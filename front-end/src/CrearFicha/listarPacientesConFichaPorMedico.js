import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import SelectSearch from "react-select-search";
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
   
    console.log("elegido",PacienteElegido)
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
                    <label>LISTA DE FICHAS</label>
                <select name="pacienteId" className="form-control" value={FichaActual} onChange={(e)=>setFichaActual(e.target.value)}>
                {Fichas.map ((Ficha)=>(
                                <option key={Ficha.id} value={Ficha.id}  >
                                    {Ficha.paciente.nombre}
                                   
                                </option>
                            ))}
                </select>
                   
                </div>
            </div>

           
            <Link to={'ficha/' + FichaActual} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> CARGAR DETALLES </Link>
            
            <Link to={'/filtros' } className='btn btn-info'><i className="fa-solid fa-file-lines"></i> Filtros </Link>
            <Link to={'sinFichas' } className='btn btn-info'><i className="fa-solid fa-file-lines"></i> CREAR FICHA </Link>
            
            </form>
        </div>

        
    )
}

export default CompListarFicha;