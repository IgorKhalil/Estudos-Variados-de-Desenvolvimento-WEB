import styles from "./Presentation.module.css"
import ButtonA from "../Elementos/ButtonA"

function Presentation(){
    return(
        <div id="Presentation" className={styles.presentation}>
            <h4><strong>Bem vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou o Igor Khalil</h1>
            <p> 
                Sou técnico em Eletrônica e em Engenharia Clínica e atualmente estou fazendo minha graduação em Ciências da Computação pela UFMA.
                <br/>Minhas experiências no mercado de trabalho me permitiram absolver muitas habilidades como, trabalho em grupo, proatividade, busca de conhecimento,
                <br/> capacidade de resolução de problemas etc... as quais utilizo constantemente no meu desenvolvimento pessoal.
                <br/>Gosto muito de aprender coisas novas e me divirto com desafios.
            </p>
            <ButtonA link="https://github.com/IgorKhalil" text="Conecte-se comigo!"/>

        </div>
    )
}

export default Presentation