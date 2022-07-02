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
import py.com.progweb.prueba.ejb.FichaDao;
import py.com.progweb.prueba.model.Detalle;
import py.com.progweb.prueba.model.Ficha;


/**
 *
 * @author nruiz
 */
@Path("ficha")
@Consumes("application/json")
@Produces("application/json")
@Stateless
public class FichaRest {
    @Inject 
    private FichaDao fichaDao;
     @POST
    @Path("/")
    public Response crear(Ficha ficha){
        this.fichaDao.CrearFicha(ficha);
        return Response.ok().build();
    }
    
    @GET
    @Path("/")
    public Response listarFichas() {
        return Response.ok(fichaDao.ListarFichas()).build();
    }
    
    
    @GET
    @Path("/{fichaId}")
    public Response getMedico(@PathParam("fichaId") int fichaId) {
               
        return Response.ok(fichaDao.GetFicha(fichaId)).build();
    }
    
    @PUT
    @Path("/update")
    public Response updateFicha(Ficha ficha) {
        this.fichaDao.UpdateFicha(ficha);
        return Response.ok().build();
    }
    
    
    @DELETE
    @Path("/{fichaId}")
    public Response deleteFicha(@PathParam("fichaId") int fichaId) {
        fichaDao.DeleteFicha(fichaId);
        return Response.ok().build();
    }
}
