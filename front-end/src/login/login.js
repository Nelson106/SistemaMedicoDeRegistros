import axios from "axios";
//import { use } from "express/lib/router";
import { useState,useEffect } from "react";
import { Link,Navigate,useNavigate, useParams } from "react-router-dom";

const URI='http://localhost:8080/prueba/medico/login/'


const CompLogin=() =>{
   
    const [Email,setEmail]=useState([])
    const [Password,setPassword]=useState([])

    useEffect(() =>{
      
    },[])
    /*
    const GetUsuario = async() =>{
       
        const res = await axios.get(URI+Email+"/"+Password)
        setEmail(res.data)
       
     }*/

    const navigate=useNavigate()
  
   
    const INICIAR=async(e)=>{
        e.preventDefault()
        let fecha=new Date()
        //console.log("Consultaaa",Consulta)
        const res = await axios.get(URI+Email+"/"+Password)
        
        
        
        navigate("/medicos/fichaMedico/"+res.data.id)
         

        
    }
    

    return (
        <div className="container">
            <form onSubmit={INICIAR}>
            <div className="row">
                <div className="col">
                   
                   <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            value={Email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                        />
                   </div>

                   <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                            value={Password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                        />
                   </div>
                  
                </div>
            </div>
            <button type="submit" className="btn btn-primary">INICIAR SESION</button>
            
            </form>
        </div>

        
    )
}

export default CompLogin;