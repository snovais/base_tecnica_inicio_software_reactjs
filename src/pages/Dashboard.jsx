import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-layout">
      {/* Sidebar - Menu Lateral */}
      <aside className="sidebar">
        <div className="sidebar-header">
          MeuProjeto
        </div>
        <nav className="sidebar-menu">
          <a href="#" className="active">Visão Geral</a>
          <a href="#">Usuários</a>
          <a href="#">Relatórios</a>
          <a href="#" onClick={logout} style={{ marginTop: 'auto', color: 'red' }}>Sair do Sistema</a>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <header className="top-header">
          <div className="search-bar">
            {/* Espaço para um futuro input de busca */}
          </div>
          <div className="user-profile">
            <span>👤</span>
            {user?.email}
          </div>
        </header>

        <div className="dashboard-content">
          <h2 className="dashboard-title">Dashboard</h2>
          
          {/* Grid de Estatísticas */}
          <div className="cards-grid">
            <div className="stat-card">
              <h3>Novos Cadastros</h3>
              <div className="value">142</div>
            </div>
            <div className="stat-card">
              <h3>Acessos Hoje</h3>
              <div className="value">859</div>
            </div>
            <div className="stat-card">
              <h3>Tarefas Pendentes</h3>
              <div className="value">12</div>
            </div>
          </div>

          {/* Espaço para uma tabela ou gráfico futuro */}
          <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3>Atividade Recente</h3>
            <p style={{ marginTop: '15px', color: '#666' }}>Área reservada para o conteúdo dinâmico do projeto.</p>
          </div>
        </div>
      </main>
    </div>
  );
}