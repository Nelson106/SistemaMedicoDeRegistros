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
import py.com.progweb.prueba.model.Medico;


/**
 *
 * @author nruiz
 */
@Stateless
public class MedicoDao {
     @PersistenceContext(unitName="pruebaPU")
    
    private EntityManager em;
    public void CrearMedico(Medico medico){
        em.persist(medico);
    }
    
     public List<Medico> ListarMedicos() {
        Query q = this.em.createQuery("select m from Medico m");
        return (List<Medico>) q.getResultList();
    }
     
     
     public Medico GetMedico(int medicoId) {
       
        return em.find(Medico.class, medicoId);
    }
     
    public Medico GetMedicoEspecialidad(String especialidad) {
        Query q = this.em.createQuery("select m from Medico m where m.especialidad=:especialidad")
                .setParameter("especialidad", especialidad);
        return (Medico) q.getSingleResult();
       
    }
    
    public Medico GetMedicoCedula(String cedula) {
        
        Query q = this.em.createQuery("select m from Medico m where m.cedula=:cedula")
                .setParameter("cedula", cedula);
        return (Medico)  q.getSingleResult();
       
    }
    public void UpdateMedico(Medico medico){
        if(em.find(Medico.class, medico.getId())!=null){
           
            em.merge(medico);
            
        }
    }
    
    public void DeleteMedico(int id){
        Medico medico=GetMedico(id);
        em.remove(medico);
    }
     
}
