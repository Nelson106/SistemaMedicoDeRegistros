/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.ejb;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.*;
import py.com.progweb.prueba.model.Medico;
import py.com.progweb.prueba.model.Paciente;

/**
 *
 * @author nruiz
 */
@Stateless
public class PacienteDao {
    @PersistenceContext(unitName="pruebaPU")
    
    private EntityManager em;
    public void CrearPaciente(Paciente paciente){
        em.persist(paciente);
    }
    
     public List<Paciente> ListarPacientes() {
        Query q = this.em.createQuery("select p from Paciente p");
       
        return (List<Paciente>) q.getResultList();
    }
     
     
     public Paciente GetPaciente(int pacienteId) {
         Paciente paciente=em.find(Paciente.class, pacienteId);
         System.out.println("aaaaaaaaaaaaaaaaaaa"+paciente.getId());
        return em.find(Paciente.class, pacienteId);
    }
     
    public void UpdatePaciente(Paciente paciente){
        if(em.find(Paciente.class, paciente.getId())!=null){
            System.out.println(paciente.getNombre());
            em.merge(paciente);
            
        }
    }
    
    public void DeletePaciente(int id){
        Paciente paciente=GetPaciente(id);
        em.remove(paciente);
    }
     
    
  
     public Paciente GetPacienteCedula(String cedula) {
        
        Query q = this.em.createQuery("select p from Paciente p where p.cedula=:cedula")
                .setParameter("cedula", cedula);
        return (Paciente)  q.getSingleResult();
       
    }
     
    
}
