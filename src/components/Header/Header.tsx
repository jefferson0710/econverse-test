import "./Header.scss";
import MagnifyingGlass from "../../assets/MagnifyingGlass.png";
import logo from "../../assets/icons/Logo.svg";
import Group from "../../assets/icons/Group.svg";
import Heart from "../../assets/icons/Heart.svg";
import UserClircle from "../../assets/icons/UserCircle.svg";
import ShoppingCart from "../../assets/icons/ShoppingCart.svg";
export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo" href="#">
          <img src={logo} alt="Econverse Logo" />
        </a>

        <form
          className="header__search"
          role="search"
          aria-label="Buscar produtos"
        >
          <input
            className="header__input"
            type="text"
            placeholder="O que você está buscando?"
          />
          <button
            className="header__searchBtn"
            type="submit"
            aria-label="Buscar"
          >
            <img src={MagnifyingGlass} alt="Buscar" />
          </button>
        </form>

        <div className="header__actions" aria-label="Ações do usuário">
          <button
            className="header__actionBtn"
            type="button"
            aria-label="Pedidos"
          >
            <img src={Group} alt="" aria-hidden="true" />
          </button>

          <button
            className="header__actionBtn"
            type="button"
            aria-label="Favoritos"
          >
            <img src={Heart} alt="" aria-hidden="true" />
          </button>

          <button
            className="header__actionBtn"
            type="button"
            aria-label="Conta"
          >
            <img src={UserClircle} alt="" aria-hidden="true" />
          </button>

          <button
            className="header__actionBtn"
            type="button"
            aria-label="Carrinho"
          >
            <img src={ShoppingCart} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
