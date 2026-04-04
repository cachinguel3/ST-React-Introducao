import './App.css';
import { Cabecalho, Conteudo, Rodape } from './componentes';


const App = () => {
  return (
    <>
      <Cabecalho/>
      <Conteudo>
        <h1>Título</h1>
        <p>Texto texto texto</p>
        <p>Texto texto texto</p>
        <p>Texto texto texto</p>
      </Conteudo>
      <Rodape criadorDoProjeto="Eduardo" />
    </>
  );
}

export { App };
