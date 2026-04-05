import "./App.css";
import { Cabecalho, Conteudo, Rodape } from "./componentes";
import { Inicial } from "./pages";

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criadorDoProjeto="Eduardo" />
    </>
  );
};

export { App };
