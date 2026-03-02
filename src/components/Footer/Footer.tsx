import "./Footer.scss";
import logo from "../../assets/icons/Logo.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Coluna esquerda */}
        <div className="footer__brand">
          <img className="footer__logo" src={logo} alt="Econverse" />
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit.
          </p>

          <div className="footer__social">
            <a href="#" aria-label="" className="footer__socialBtn">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#" aria-label="Facebook" className="footer__socialBtn">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" aria-label="LinkedIn" className="footer__socialBtn">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>

        {/* Linha vertical */}
        <div className="footer__divider" />

        {/* Colunas */}
        <nav className="footer__cols" aria-label="Links do rodapé">
          <div className="footer__col">
            <h4 className="footer__title">Institucional</h4>
            <a className="footer__link" href="#">
              Sobre Nós
            </a>
            <a className="footer__link" href="#">
              Movimento
            </a>
            <a className="footer__link" href="#">
              Trabalhe conosco
            </a>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Ajuda</h4>
            <a className="footer__link" href="#">
              Suporte
            </a>
            <a className="footer__link" href="#">
              Fale Conosco
            </a>
            <a className="footer__link" href="#">
              Perguntas Frequentes
            </a>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Termos</h4>
            <a className="footer__link" href="#">
              Termos e Condições
            </a>
            <a className="footer__link" href="#">
              Política de Privacidade
            </a>
            <a className="footer__link" href="#">
              Troca e Devolução
            </a>
          </div>
        </nav>
      </div>

      {/* Barra cinza de baixo */}
      <div className="footer__bottom">
        <p className="footer__bottomText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  );
}
