import style from './Rodape.module.css';

const Rodape = (props) => {
    const { criadorDoProjeto } = props;
    return (
        <footer className={style.Rodape}>
            <p>React Básico - 2026 - {criadorDoProjeto}</p>
        </footer>
    )
}

export { Rodape };