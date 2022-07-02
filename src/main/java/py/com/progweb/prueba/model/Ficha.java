/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.model;

import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.*;
import lombok.Data;

/**
 *
 * @author nruiz
 */

@Entity
@Data
@Table(name="ficha")
public class Ficha {
    @Id
    @Column(name="id")
    @GeneratedValue(generator="fichaSec",strategy=GenerationType.SEQUENCE)
    @SequenceGenerator(name="fichaSec",sequenceName="seq_ficha",allocationSize = 0)
    private Integer id;
    
    
    @Column(name="fecha")
    @Temporal(javax.persistence.TemporalType.DATE)
    Date fecha;
    
    
    
    @JoinColumn(name="paciente_id")
    @OneToOne(fetch=FetchType.LAZY)
    Paciente paciente;
    
    @ManyToOne()
    @JoinColumn(name="medico_id")
    Medico medico;
   
    @OneToMany(mappedBy="ficha",cascade=CascadeType.ALL,orphanRemoval=true)
    private List<Detalle> detalle=null;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public Medico getMedico() {
        return medico;
    }

    public void setMedico(Medico medico) {
        this.medico = medico;
    }

    public List<Detalle> getDetalle() {
        return detalle;
    }

    public void setDetalle(List<Detalle> detalle) {
        this.detalle = detalle;
    }

   
    
}
