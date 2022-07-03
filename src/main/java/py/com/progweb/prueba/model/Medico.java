/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package py.com.progweb.prueba.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import lombok.Data;

/**
 *
 * @author nruiz
 */
@Entity
@Data
@Table(name="medico")
/*@JsonIdentityInfo(
  generator = ObjectIdGenerators.PropertyGenerator.class, 
  property = "id")*/
public class Medico {
    @Id
    @Column(name="id")
    @GeneratedValue(generator="medicoSec",strategy=GenerationType.SEQUENCE)
    @SequenceGenerator(name="medicoSec",sequenceName="seq_medico",allocationSize = 0)
    private Integer id;
    
    @Column(name="nombre")
    private String nombre;
    
    @Column (name="apellido")
    private String apellido;
    
    @Column (name="cedula")
    private String cedula;
    
    @Column (name="email")
    private String email;
    
    @Column(name="telefono")
    private String telefono;
    
    @Column(name="fecha_nacimiento")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date fechaNacimiento;
    
    @Column(name="especialidad")
    private String especialidad;
    
    @Column(name="usuario")
    private String usuario;
    
    @Column(name="password")
    private String password;
  /* 
   @OneToMany(mappedBy="medico",cascade=CascadeType.ALL,orphanRemoval=true,fetch = FetchType.EAGER)
  // @JsonManagedReference(value="medico-ficha")
    private List<Ficha> ficha=null;

    public List<Ficha> getFicha() {
        return ficha;
    }

    public void setFicha(List<Ficha> ficha) {
        this.ficha = ficha;
    }

  */
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
