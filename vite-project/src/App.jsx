import './App.css';
import { Cabecalho, Conteudo } from './componentes';


const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <h1>Título</h1>
        <p>Texto texto texto</p>
      </Conteudo>
    </>
  );
}

export { App };
