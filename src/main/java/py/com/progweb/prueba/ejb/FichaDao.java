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
}
