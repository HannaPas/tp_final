import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/home';
import Productos from '../Pages/productos';
import Login from '../Pages/login';
import Registro from '../Pages/registro';
import '../Styles/style.css';  

function App() {
  return (
    <Router>
      <header>
        <h2>Perfumería</h2>
      </header>

      <nav className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2024</p>
      </footer>
    </Router>
  );
}

export default App;
