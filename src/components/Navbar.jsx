import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand">TCC Dashboard</div>
      
      {/* Botão Hambúrguer */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Links do Menu */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#perfil">Meu Perfil</a>
        <a href="#config">Configurações</a>
        <button onClick={logout}>Sair</button>
      </div>
    </nav>
  );
}