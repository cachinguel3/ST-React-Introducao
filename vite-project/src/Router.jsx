import { Route, Routes } from "react-router-dom";
import { LayoutPadrao } from "./layouts";
import { Inicial, Pagina404, SobreNos } from "./pages";

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<LayoutPadrao />}>
            <Route path="/" element={<Inicial />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="*" element={<Pagina404 />} />
         </Route>
      </Routes>
   );
};

export { Router };

