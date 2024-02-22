import styles from "./Skills.module.css"
import javascript from "../../Image/skills/javascript.svg"
import html from "../../Image/skills/html.svg"
import css from "../../Image/skills/css.svg"
import python from "../../Image/skills/python.svg"
import react from "../../Image/skills/react.svg"

function Skills(){
    return(
        <div id="Skills" className={styles.skill}>
            <h1> Habilidades </h1>
            <p> Conheça um pouco das minhas principais habilidades e conhecimentos</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={python}/>
                <img src={react}/>

            </div>       
        </div>
    )
}

export default Skills