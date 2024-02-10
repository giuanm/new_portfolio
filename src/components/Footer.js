import styles from "./Footer.module.css"
import linkedIn from "../assets/icons/icons8-linkedin.gif";
import github from "../assets/icons/icons8-github.gif";
import message from '../assets/icons/message.svg';

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <p>
                <span>Giuan Ferreira @</span>
            </p>
            <a href="https://www.linkedin.com/in/giuan/" target = "_blank" rel="noreferrer">
                <img src={linkedIn} alt="Linkedin" className={styles.socialLogo} />
            </a>
            <a href="https://github.com/giuanm" target = "_blank" rel="noreferrer">
                <img src={github} alt="GitHub" className={styles.socialLogo}/>
            </a>
            <a href="https://respond.forms.app/giuanferreira/contact" target="_blank" rel="noreferrer">
                <img src={message} alt="foto" style={{width: '3rem'}}/>
            </a>
        </footer>
    </div>
  )
}

export default Footer