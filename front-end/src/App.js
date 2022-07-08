import logo from './logo.svg';
import './App.css';
import { Link,useNavigate, useParams } from "react-router-dom";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CompLogin from './login/login';


import CompListarMedicos from './CrearFicha/crearFicha';
import CompCargarFicha from './CrearFicha/cargarFicha';
import CompCargarDetalle from './CrearFicha/cargarDetalle';
import CompListarFichaPorMedico from './CrearFicha/listarPacientesConFichaPorMedico';
import CompFiltros from './filtros/filtros';
import CompEspecialidad from './filtros/especialidad';
import CompDetallesMedicoCedula from './filtros/medicoDetalleCedula';
import CompFichaMedicoCedula from './filtros/medicosFichaCedula';
import CompFichaPacienteCedula from './filtros/pacienteFichaCedula';
import CompDetallesPacienteCedula from './filtros/pacienteDetalleCedula';
import CompCrearPaciente from './CrearPaciente/crearPaciente';
import CompFichaEspecialidad from './filtros/medicoFichaEspecialidad';

import CompSinFichas from './CrearFicha/listarPacientesSinFichas';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='btn-group' role='group' aria-label='Basic example'>
           <a className='btn btn-secondary' href='/login' role="button">LOGIN</a>
        </div>
      </header>

      <BrowserRouter>
          <Routes>
              <Route path='/medicos' element={<CompListarMedicos/>} />
              <Route path='medicos/fichaMedico/:medicoId/cargarFicha/' element={<CompCargarFicha/>} />
              <Route path='medicos/fichaMedico/:medicoId/ficha/:fichaId' element={<CompCargarDetalle/>} />
              <Route path='medicos/fichaMedico/:medicoId' element={<CompListarFichaPorMedico/>} />
              <Route path='filtros' element={<CompFiltros/>} />
              <Route path='filtros/especialidad/:especialidad' element={<CompFichaEspecialidad/>} />
             
              <Route path='filtros/medicoFicha/:cedula' element={<CompFichaMedicoCedula/>} />
              <Route path='filtros/medicoFicha/:cedula/paciente/:pacienteId' element={<CompDetallesMedicoCedula/>} />
              <Route path='filtros/pacienteFicha/:cedula' element={<CompFichaPacienteCedula/>} />
              <Route path='filtros/pacienteFicha/:cedula/medico/:medicoId' element={<CompDetallesPacienteCedula/>} />

              <Route path='/login' element={<CompLogin/>} />

              <Route path='medicos/fichaMedico/:medicoId/sinFichas' element={<CompListarFichaPorMedico/>} />


             

              <Route path='medicos/fichaMedico/:medicoId/sinFichas/' element={<CompSinFichas/>} />
              <Route path='medicos/fichaMedico/:medicoId/sinFichas/crearPaciente' element={<CompCrearPaciente/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
