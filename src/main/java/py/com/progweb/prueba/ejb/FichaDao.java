/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.ejb;

import java.util.Date;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.hornetq.utils.json.JSONObject;
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
    public int CrearFicha(Ficha ficha){
        em.persist(ficha);
       
        List <Ficha> list=GetFichaActual(ficha.getPaciente().getId());
         
        return list.get(0).getId() ;
    }
    
     public List<Ficha> GetFichaActual(int pacienteId) {
        Query q = this.em.createQuery("select f from Ficha f where f.paciente.id =:pacienteId ")
                .setParameter("pacienteId", pacienteId);
       
        return (List<Ficha>) q.getResultList();
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
    
     public List<Detalle> ListarDetallesEspecialidadMedico(String especialidad) {
      /*  Query medico = this.em.createQuery("select m from Medico m where m.especialidad=:especialidad")
                .setParameter("especialidad",especialidad);*/
    /*  JSONObject obj=especialidad.toJson();
      System.out.println("aaaaaaaaaaaaaaaa"+especialidad['especialidad']);*/
        Query q = this.em.createQuery("select d from Detalle d where d.ficha.medico.especialidad =:especialidad order by d.ficha.paciente.id asc")
                .setParameter("especialidad",especialidad);
        System.out.println("bbbbbbbbbbbbbbbbbbbb"+ (List<Detalle>) q.getResultList());
        return (List<Detalle>) q.getResultList();
    }
     
      public List<Detalle> ListarDetallesMedicoPorCedula(String cedula) {
          
        Query q = this.em.createQuery("select d from Detalle d where d.ficha.medico.cedula =:cedula order by d.ficha.paciente.id asc")
                .setParameter("cedula",cedula);
       
        return (List<Detalle>) q.getResultList();
    }
      
      
     public List<Detalle> ListarDetallesPacientePorCedula(String cedula) {
          
        Query q = this.em.createQuery("select d from Detalle d where d.ficha.paciente.cedula =:cedula")
                .setParameter("cedula",cedula);
      
        return (List<Detalle>) q.getResultList();
    }
     
     
      public List<Detalle> ListarDetallesPorFecha(Date fecha) {
          
        Query q = this.em.createQuery("select d from Detalle d where d.fecha =:fecha")
                .setParameter("fecha",fecha);
      
        return (List<Detalle>) q.getResultList();
    }
     
      public List<Ficha> GetFichaPorMedicos(int medicoId) {
        Query q = this.em.createQuery("select f from Ficha f where f.medico.id =:medicoId ")
                .setParameter("medicoId", medicoId);
       
        return (List<Ficha>) q.getResultList();
    }
      
      public List<Detalle> GetFichaPorMedicoYPaciente(String cedula,int pacienteId) {
        Query q = this.em.createQuery("select d from Detalle d where d.ficha.medico.cedula =:cedula and d.ficha.paciente.id=:pacienteId ")
                .setParameter("cedula", cedula)
                .setParameter("pacienteId", pacienteId);
       
        return (List<Detalle>) q.getResultList();
    }
      
      public List<Detalle> GetFichaPorPacienteYMedico(String cedula,int medicoId) {
        Query q = this.em.createQuery("select d from Detalle d where d.ficha.paciente.cedula =:cedula and d.ficha.medico.id=:medicoId ")
                .setParameter("cedula", cedula)
                .setParameter("medicoId", medicoId);
       
        return (List<Detalle>) q.getResultList();
    }
      public List<Ficha> GetFichaPorMedicosCedula(String cedula) {
        Query q = this.em.createQuery("select f from Ficha f where f.medico.cedula =:cedula ")
                .setParameter("cedula", cedula);
       
        return (List<Ficha>) q.getResultList();
    }
      
      public List<Ficha> GetFichaPorPacienteCedula(String cedula) {
        Query q = this.em.createQuery("select f from Ficha f where f.paciente.cedula =:cedula ")
                .setParameter("cedula", cedula);
       
        return (List<Ficha>) q.getResultList();
    }
}
