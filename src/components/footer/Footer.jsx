import { SocialIcons } from "./social-icons/SocialIcons";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav>
        <ul>
          <li>
            <a href="#seccion-hola">HOLA</a>
          </li>
          <li>
            <a href="#seccion-conocimientos">CONOCIMIENTOS</a>
          </li>
          <li>
            <a href="#seccion-proyectos">PROYECTOS</a>
          </li>
          <li>
            <a href="#seccion-formulario">CONTACTO</a>
          </li>
        </ul>
      </nav>
      <div className={styles.cajaIconosRedes}>
        <SocialIcons
          iconType="fa-brands fa-github-alt"
          link="https://github.com/sami1793"
        />
        <SocialIcons
          iconType="fa-brands fa-linkedin-in"
          link="https://www.linkedin.com/in/samanta-romero-033221216/"
        />
        <SocialIcons
          iconType="fa-solid fa-envelope"
          link="https://github.com/sami1793"
        />
      </div>
    </div>
  );
};
