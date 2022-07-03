/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.*;

import lombok.Data;

/**
 *
 * @author nruiz
 */
@Entity
@Data
@Table(name="detalle")
public class Detalle {
    @Id
    @Column(name="id")
    @GeneratedValue(generator="detalleSec",strategy=GenerationType.SEQUENCE)
    @SequenceGenerator(name="detalleSec",sequenceName="seq_detalle",allocationSize = 0)
    private Integer id;
    
    @Column (name="motivo")
    private String motivo;
    
    @Column(name="diagnostico")
    private String diagnostico;
    
    @Column(name="tratamiento")
    private String tratamiento;
    
   
    @ManyToOne()
    @JoinColumn(name="ficha_id")
   @JsonManagedReference(value="detalle-ficha")
    private Ficha ficha;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public String getDiagnostico() {
        return diagnostico;
    }

    public void setDiagnostico(String diagnostico) {
        this.diagnostico = diagnostico;
    }

    public String getTratamiento() {
        return tratamiento;
    }

    public void setTratamiento(String tratamiento) {
        this.tratamiento = tratamiento;
    }

    public Ficha getFicha() {
        return ficha;
    }

    public void setFicha(Ficha ficha) {
        this.ficha = ficha;
    }
    
}
