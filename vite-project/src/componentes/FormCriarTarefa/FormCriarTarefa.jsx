import { Botao, CampoTexto, TIPO_BOTAO } from "../../componentes";
import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = () => {
  return (
    <form className={style.FormCriarTarefa}>
      <CampoTexto />
      <Botao texto="+" tipo={TIPO_BOTAO.SECUNDARIO} />
    </form>
  );
};

export { FormCriarTarefa };

