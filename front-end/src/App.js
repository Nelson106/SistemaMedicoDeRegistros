import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CompListarMedicos from './CrearFicha/crearFicha';
import CompCargarFicha from './CrearFicha/cargarFicha';
import CompCargarDetalle from './CrearFicha/cargarDetalle';
import CompListarFichaPorMedico from './CrearFicha/listarPacientesConFichaPorMedico';
import CompFiltros from './filtros/filtros';
import CompEspecialidad from './filtros/especialidad';
import CompDetallesMedicoCedula from './filtros/medicos';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='btn-group' role='group' aria-label='Basic example'>
            
        </div>
      </header>

      <BrowserRouter>
          <Routes>
              <Route path='/medicos' element={<CompListarMedicos/>} />
              <Route path='medicos/fichaMedico/:medicoId/cargarFicha/' element={<CompCargarFicha/>} />
              <Route path='medicos/fichaMedico/:medicoId/ficha/:fichaId' element={<CompCargarDetalle/>} />
              <Route path='medicos/fichaMedico/:medicoId' element={<CompListarFichaPorMedico/>} />
              <Route path='filtros' element={<CompFiltros/>} />
              <Route path='filtros/especialidad/:especialidad' element={<CompEspecialidad/>} />
              <Route path='filtros/medico/:cedula' element={<CompDetallesMedicoCedula/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
