/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.model;


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
    Ficha ficha;
    
}
