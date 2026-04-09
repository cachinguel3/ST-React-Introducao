import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./Contexts";
import { Router } from "./Router";

const App = () => {
   return (
      <AppContextProvider>
         <BrowserRouter>
            <Router />
         </BrowserRouter>
      </AppContextProvider>
   );
};

export { App };