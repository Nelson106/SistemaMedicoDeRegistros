/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.*;
import lombok.Data;

/**
 *
 * @author nruiz
 */

@Entity
@Data
@Table(name="detalle")
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
    private Detalle detalle;
    
}
