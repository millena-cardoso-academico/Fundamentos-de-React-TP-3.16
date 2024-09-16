import ProfileCard from './components/ProfileCard';
import './styles/App.css'; // Verifique se o caminho está correto

const App = () => {
  return (
    <div className="app-container">
      <h1>Perfis de Usuários</h1>
      <ProfileCard name="João" age={30} status="ativo" />
      <ProfileCard name="Maria" status="pendente" />
      <ProfileCard name="Carlos" age={25} status="inativo" />
    </div>
  );
};

export default App;