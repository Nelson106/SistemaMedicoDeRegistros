/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.rest;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import py.com.progweb.prueba.ejb.MedicoDao;
import py.com.progweb.prueba.model.Medico;

/**
 *
 * @author nruiz
 */
@Path("medico")
@Consumes("application/json")
@Produces("application/json")
@Stateless
public class MedicoRest {
    @Inject 
    private MedicoDao medicoDao;
     @POST
    @Path("/")
    public Response crear(Medico medico){
        this.medicoDao.CrearMedico(medico);
        return Response.ok().build();
    }
    
    @GET
    @Path("/")
    public Response listarMedicos() {
        return Response.ok(medicoDao.ListarMedicos()).build();
    }
    
    
    @GET
    @Path("/{medicoId}")
    public Response getMedico(@PathParam("medicoId") int medicoId) {
               
        return Response.ok(medicoDao.GetMedico(medicoId)).build();
    }
    
    @PUT
    @Path("/update")
    public Response updateMedico(Medico medico) {
        this.medicoDao.UpdateMedico(medico);
        return Response.ok().build();
    }
    
    
    @DELETE
    @Path("/{medicoId}")
    public Response deleteMedico(@PathParam("medicoId") int medicoId) {
        medicoDao.DeleteMedico(medicoId);
        return Response.ok().build();
    }
}
