/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.rest;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import py.com.progweb.prueba.ejb.DetalleDao;
import py.com.progweb.prueba.ejb.MedicoDao;
import py.com.progweb.prueba.model.Detalle;
import py.com.progweb.prueba.model.Medico;


/**
 *
 * @author nruiz
 */
@Path("detalle")
@Consumes("application/json")
@Produces("application/json")
@Stateless
public class DetalleRest {
    @Inject 
    private DetalleDao detalleDao;
     @POST
    @Path("/")
    public Response crear(Detalle detalle){
        this.detalleDao.CrearDetalle(detalle);
        return Response.ok().build();
    }
    
    @GET
    @Path("/")
    public Response listarDetalles() {
        return Response.ok(detalleDao.ListarDetalles()).build();
    }
    
    
    @GET
    @Path("/{detalleId}")
    public Response getMedico(@PathParam("detalleId") int detalleId) {
               
        return Response.ok(detalleDao.GetDetalle(detalleId)).build();
    }
    
    @PUT
    @Path("/update")
    public Response updateDetall(Detalle detalle) {
        this.detalleDao.UpdateDetalle(detalle);
        return Response.ok().build();
    }
    
    
    @DELETE
    @Path("/{detalleId}")
    public Response deleteDetalle(@PathParam("detalleId") int detalleId) {
        detalleDao.DeleteDetalle(detalleId);
        return Response.ok().build();
    }
}
