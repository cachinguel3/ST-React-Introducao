import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../componentes";
import { useAppContext } from "../../hooks/useAppContext";

const LayoutPadrao = () => {
   const { criador } = useAppContext();
   return (
      <>
         <Cabecalho />
         <Conteudo>
            <Outlet />
         </Conteudo>
         <Rodape criadorDoProjeto={criador} />
      </>
   );
};

export { LayoutPadrao };

