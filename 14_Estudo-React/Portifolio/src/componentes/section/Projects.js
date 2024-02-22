import ButtonB from "../Elementos/ButtonB"
import styles from "./Projects.module.css"
import Card from "../Elementos/Card"
import lpdnc from "../../Image/projects/lpdnc.svg"
import portifolio from "../../Image/projects/portifolio.svg"

function Projects(){
    return(
        <div  id = 'Projects'>
            <section className= {styles.projects}>
            <h1> Projetos</h1>
            <Card img={lpdnc} 
            title="LP-DNC" 
            tech="HTML, CSS, JavaScrypt" 
            description="Projeto Front-End para realizar pipipi e popo." 
            repo="https://github.com/IgorKhalil/LeadingPage-Arquitetura" 
            site="https://leadingpage-arquitetura.netlify.app/"/>
            <Card img={portifolio} 
            title="Portifólio" 
            tech="HTML, CSS, JavaScrypt" 
            description="Projeto Front-End para realizar pipipi e popo." 
            repo="https://github.com/IgorKhalil/Portifolio" 
            site="https://leadingpage-arquitetura.netlify.app/"/>
            </section>
            <ButtonB text="Acesse meu repositório" link="https://github.com/IgorKhalil?tab=repositories"/>
        </div>
    )
}

export default Projects