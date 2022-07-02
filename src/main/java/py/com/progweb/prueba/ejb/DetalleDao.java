/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.ejb;
import java.util.List;
import javax.persistence.*;
import javax.ejb.Stateless;
import py.com.progweb.prueba.model.Detalle;


/**
 *
 * @author nruiz
 */
@Stateless
public class DetalleDao {
    @PersistenceContext(unitName="pruebaPU")
    
    private EntityManager em;
    public void CrearDetalle(Detalle detalle){
        em.persist(detalle);
    }
    
     public List<Detalle> ListarDetalles() {
        Query q = this.em.createQuery("select d from Detalle d");
        return (List<Detalle>) q.getResultList();
    }
     
     
     public Detalle GetDetalle(int detalleId) {
       
        return em.find(Detalle.class, detalleId);
    }
     
    public void UpdateDetalle(Detalle detalle){
        if(em.find(Detalle.class, detalle.getId())!=null){
           
            em.merge(detalle);
            
        }
    }
    
    public void DeleteDetalle(int id){
        Detalle detalle=GetDetalle(id);
        em.remove(detalle);
    }
}
