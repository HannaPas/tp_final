import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './productos';
import Login from './login';
import Registro from './registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
