import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import SelectSearch from "react-select-search";
const URIP='http://localhost:8080/prueba/paciente/sinFichas/'
const URIF='http://localhost:8080/prueba/ficha/'

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
       const res = await axios.get(URIP+medicoId)
       setFichas(res.data)
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
         navigate("/medicos/fichaMedico/"+medicoId+"/ficha/"+res.data)
    }
    

    return (
        <div className="container">
            <form onSubmit={GuardarFicha}>
            <div className="row">
                <div className="col">
                    <label>LISTA DE FICHAS</label>
                <select name="pacienteId" className="form-control" value={PacienteElegido} onChange={(e)=>setPacienteElegido(e.target.value)}>
                {Fichas.map ((Ficha)=>(
                                <option key={Ficha.paciente.id} value={Ficha.paciente.id}  >
                                    {Ficha.paciente.nombre}
                          
                                </option>
                            ))}
                </select>
                   
                </div>
            </div>

           
            
            <button type="submit" className="btn btn-primary">Agregar Paciente</button>
            <Link to={'crearPaciente/'} className='btn btn-info'><i className="fa-solid fa-file-lines"></i> REGISTRAR   </Link>
            
            </form>
        </div>

        
    )
}

export default CompListarFicha;