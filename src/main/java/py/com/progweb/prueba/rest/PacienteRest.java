/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.rest;


import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import py.com.progweb.prueba.ejb.PacienteDao;
import py.com.progweb.prueba.model.Paciente;

/**
 *
 * @author nruiz
 */
@Path("paciente")
@Consumes("application/json")
@Produces("application/json")
@Stateless
public class PacienteRest {
    @Inject 
    private PacienteDao pacienteDao;
    
    @POST
    @Path("/")
    public Response crear(Paciente paciente){
        this.pacienteDao.CrearPaciente(paciente);
        return Response.ok().build();
    }
    
    @GET
    @Path("/")
    public Response listarPacientes() {
        return Response.ok(pacienteDao.ListarPacientes()).build();
    }
    
    
    @GET
    @Path("/{pacienteId}")
    public Response getPaciente(@PathParam("pacienteId") int pacienteId) {
        
        
        return Response.ok(pacienteDao.GetPaciente(pacienteId)).build();
    }
    
    @PUT
    @Path("/update")
    public Response updatePaciente(Paciente paciente) {
        this.pacienteDao.UpdatePaciente(paciente);
        return Response.ok().build();
    }
    
    
    @DELETE
    @Path("/{pacienteId}")
    public Response deletePaciente(@PathParam("pacienteId") int pacienteId) {
        pacienteDao.DeletePaciente(pacienteId);
        return Response.ok().build();
    }
}
