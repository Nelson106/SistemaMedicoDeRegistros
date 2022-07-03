/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.ejb;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import py.com.progweb.prueba.model.Ficha;
import py.com.progweb.prueba.model.Detalle;
import py.com.progweb.prueba.model.Medico;

/**
 *
 * @author nruiz
 */
@Stateless
public class FichaDao {
    @PersistenceContext(unitName="pruebaPU")
    
    private EntityManager em;
    public void CrearFicha(Ficha ficha){
        em.persist(ficha);
    }
    
     public List<Ficha> ListarFichas() {
        Query q = this.em.createQuery("select f from Ficha f");
        return (List<Ficha>) q.getResultList();
    }
     
     
     public Ficha GetFicha(int fichaId) {
       
        return em.find(Ficha.class, fichaId);
    }
     
    public void UpdateFicha(Ficha ficha){
        if(em.find(Ficha.class, ficha.getId())!=null){
           
            em.merge(ficha);
            
        }
    }
    
    public void DeleteFicha(int id){
        Ficha ficha=GetFicha(id);
        em.remove(ficha);
    }
    
     public List<Detalle> ListarFichasMedico(String especialidad) {
        Query medico = this.em.createQuery("select m from Medico m where especialidad=:especialidad")
                .setParameter("especialidad",especialidad);
       // Query q = this.em.createQuery("select f from Ficha f");
        return (List<Detalle>) medico.getResultList();
    }
}
