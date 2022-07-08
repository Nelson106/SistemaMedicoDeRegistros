import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:8080/prueba/paciente'
const URIF='http://localhost:8080/prueba/ficha/'

const CompCrearPaciente=() =>{
    const [Nombre,setNombre]=useState([])
    const [Apellido,setApellido]=useState([])
    const [Cedula,setCedula]=useState([])
    const [Email,setEmail]=useState([])
    const [Telefono,setTelefono]=useState([])
    const [FechaNacimiento,setFechaNacimiento]=useState([])
    const [Paciente,setPaciente]=useState([])
    const [FichaActual,setFichaActual]=useState([])
    useEffect(() =>{
       
    },[])
    const {medicoId}=useParams()
    const navigate=useNavigate()
    //procedimiento para mostrar todas las mesas
  
  
   
    const Guardar=async(e)=>{
        e.preventDefault()
        let fecha=new Date()
           
        await axios.post(URI,{
            nombre:Nombre,
            apellido:Apellido,
            cedula:Cedula,
            email:Email,
            telefono:Telefono,
            
         })
         

         const res= await axios.post(URI+"/cedula",{cedula:Cedula})
         
         console.log("aaaaaaaaaaaa",res)
         const res1=await axios.post(URIF,{
             fecha:fecha,
             paciente:{
                 id:res.data.id
             },
              medico:{
                  id:medicoId
              }
          })
          setFichaActual(res1.data)


          navigate("/medicos/fichaMedico/"+medicoId+"/ficha/"+res1.data)
         
          console.log("aaaaaaaaaaaaaaaaaaaaaa",res1.data)
          
    }
    

    return (
        <div className="container">
            <form onSubmit={Guardar}>
            <div className="row">
                <div className="col">
                   
                   <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            value={Nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>

                   <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input
                            value={Apellido}
                            onChange={(e)=>setApellido(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <div className="mb-3">
                        <label className="form-label">Cedula</label>
                        <input
                            value={Cedula}
                            onChange={(e)=>setCedula(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            value={Email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <div className="mb-3">
                        <label className="form-label">Telefono</label>
                        <input
                            value={Telefono}
                            onChange={(e)=>setTelefono(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                   </div>
                   <div className="mb-3">
                        <label className="form-label">Fecha de Nacimiento</label>
                        <input
                            value={FechaNacimiento}
                            onChange={(e)=>setFechaNacimiento(e.target.value)}
                            type="date"
                            className="form-control"
                        />
                   </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>

        
    )
}

export default CompCrearPaciente;