import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const sucesso = login(email, password);
    if (sucesso) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-page">
      {/* Lado Esquerdo - Formulário */}
      <div className="login-left">
        <div className="login-form-container">
          <h1>Log In</h1>
          
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <span className="input-icon">✉️</span>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            
            <div className="input-group">
              <span className="input-icon">🔑</span>
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            <button type="submit" className="btn-blue">Log In</button>
            <a href="#" className="forgot-password">Forgot password?</a>
          </form>

          <div className="divider">or</div>

          {/* Apenas o botão do Google */}
          {/* Botão com SVG Inline do Google */}
          <button className="btn-google" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <p className="signup-text">
            Don't have an account? <Link to="/cadastro">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Lado Direito - Imagem de Fundo (Simulando a referência) */}
      <div className="login-right">
        <div className="quote-box">
          <p>The future belongs to those who <strong>believe</strong> in the <strong>beauty of their dreams.</strong></p>
          <span>- Eleanor Roosevelt</span>
        </div>
      </div>
    </div>
  );
}