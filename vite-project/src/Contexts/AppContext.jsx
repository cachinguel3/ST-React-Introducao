import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({});

export const AppContextProvider = (props) => {
   const { children } = props;

   const [criador, _setCriador] = useState("Eduardo");

   const [tarefas, setTarefas] = useState([
    
   ]);

   const adicionarTarefa = (nomeTarefa) => {
      setTarefas((estadoAtual) => {
         const tarefa = {
            id: estadoAtual.length + 1,
            nome: nomeTarefa,
         };

         return [...estadoAtual, tarefa];
      });
   };

   const removerTarefa = (idTarefa) => {
    setTarefas((estadoAtual) => {
        const tarefasAtualizadas = estadoAtual.filter((tarefa) => tarefa.id !== idTarefa);

        return [...tarefasAtualizadas];
    });
   };

   return (
      <AppContext.Provider value={{ 
            criador, 
            tarefas, 
            adicionarTarefa, 
            removerTarefa 
        }}>
         {children}
      </AppContext.Provider>
   );
};
