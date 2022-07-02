/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package py.com.progweb.prueba.ejb;

import java.io.Console;
import static java.lang.System.console;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import py.com.progweb.prueba.model.Medico;

/**
 * Modelo de la entidad Medico
 *
 * @author Sergio D. Riveros Vazquez
 */
@Stateless
public class MedicoDao {

    @PersistenceContext(unitName = "pruebaPU")

    private EntityManager em;

    public void CrearMedico(Medico medico) {
        em.persist(medico);
    }

    public List<Medico> ListarMedicos() {
        Query q = this.em.createQuery("select p from Medico p");
        return (List<Medico>) q.getResultList();
    }

    public Medico GetMedico(int medicoId) {
        System.out.print("Get Medico:" + medicoId);
        return em.find(Medico.class, medicoId);
    }

    public void UpdateMedico(Medico medico) {
        if (em.find(Medico.class, medico.getId()) != null) {
            System.out.println(medico.getNombre());
            em.merge(medico);
        }
    }

    public void DeleteMedico(int id) {
        Medico medico = GetMedico(id);
        em.remove(medico);
    }

}
