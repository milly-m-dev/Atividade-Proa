import Styles from './css/Rodape.module.css';
import whats from '../assets/whats.png';
import insta from '../assets/insta.png';
import face from '../assets/face.png';

function Rodape () {
    return (
        <footer className={Styles.rodape}>
            <h4>Nossa Loja - Instrumentos Musicais</h4>
            <p>Rua Tito, 54 - Lapa</p>
            <p>São Paulo - Brasil</p>

            <div className={Styles.icone_rodape}>
                <a href="#"><img src={whats} alt="WhatsApp"></img></a>
                <a href="#"><img src={insta} alt="Instagram"></img></a>
                <a href="#"><img src={face} alt="Facebook"></img></a>
            </div>
        </footer>
    )
}

export default Rodape