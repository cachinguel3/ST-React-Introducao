import { Routes } from "react-router-dom";
import { Inicial, SobreNos } from "./pages";

const Router = () => {
   return (
      <Routes>
         <Router path="/" element={<Inicial />} />
         <Router path="/sobre-nos" element={<SobreNos />} />
      </Routes>
   );
};

export { Router };

