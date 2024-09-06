import '../Styles/Registro.css';

function Registro() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Todos los campos son obligatorios.");
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form className="registro-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirmar Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
