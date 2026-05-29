import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    navigate('/'); // Volta pro login
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleCadastro}>
        <h2>Criar Conta</h2>
        <input type="text" placeholder="Nome Completo" required />
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit" className="btn-primario">Cadastrar</button>
        <Link to="/">Já possui conta? Faça Login</Link>
      </form>
    </div>
  );
}