import { useState } from "react";
import { Botao, CampoTexto, TIPO_BOTAO } from "../../componentes";
import { useAppContext } from "../../hooks";
import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = () => {
   const { adicionarTarefa } = useAppContext();

   const [nomeTarefa, setNomeTarefa] = useState();

   const onChangeTarefa = (event) => {
      setNomeTarefa(event.currentTarget.value);
   };

   const submeterFormulario = (event) => {
      event.preventDefault();

      if (!nomeTarefa) {
         return;
      }

      adicionarTarefa(nomeTarefa);

      setNomeTarefa("");
   };

   return (
      <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
         <CampoTexto value={nomeTarefa} onChange={onChangeTarefa} />
         <Botao texto="+" tipo={TIPO_BOTAO.PRIMARIO} />
      </form>
   );
};

export { FormCriarTarefa };

