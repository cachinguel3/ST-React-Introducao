import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import { Cabecalho, Conteudo, Rodape } from "./componentes";
import { Inicial } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Cabecalho />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criadorDoProjeto="Eduardo" /> */}
    </BrowserRouter>
  );
};

export { App };
