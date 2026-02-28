import "./Navbar.scss"
import CrownSimple from "../../assets/icons/CrownSimple.svg"

const links = [
  { label: "Todas categorias" },
  { label: "Supermercado" },
  { label: "Livros" },
  { label: "Moda" },
  { label: "Lançamentos" },
  { label: "Ofertas do dia" },
  { label: "Assinatura", icon: CrownSimple },
]
const ACTIVE = "Ofertas do dia"
export default function Navbar() {
  return (
    <nav className="navbar container" aria-label="Menu principal">
      <div className="navbar__container container">
{links.map((item) => (
  <a key={item.label} className={`navbar__link ${item.label === ACTIVE ? "is-active" : ""}`} href="#">
    {item.icon && (
      <img src={item.icon} alt="" className="navbar__icon" />
    )}
    {item.label}
  </a>
))}
      </div>
    </nav>
  )
}