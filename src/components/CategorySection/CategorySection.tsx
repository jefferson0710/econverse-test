import "./CategorySection.scss";

import technology from "../../assets/icons/tecnologia.svg";
import market from "../../assets/icons/supermercados.svg";
import drinks from "../../assets/icons/whiskey.svg";
import tools from "../../assets/icons/ferramentas.svg";
import health from "../../assets/icons/cuidados-de-saude.svg";
import sports from "../../assets/icons/corrida.svg";
import fashion from "../../assets/icons/moda.svg";

type Category = {
  label: string;
  icon: string;
  active?: boolean;
};

const categories: Category[] = [
  { label: "Tecnologia", icon: technology, active: true },
  { label: "Supermercado", icon: market },
  { label: "Bebidas", icon: drinks },
  { label: "Ferramentas", icon: tools },
  { label: "Saúde", icon: health },
  { label: "Esportes e Fitness", icon: sports },
  { label: "Moda", icon: fashion },
];

export default function CategorySection() {
  return (
    <section className="categories" aria-label="Categorias">
      <div className="categories__container">
        <ul className="categories__list">
          {categories.map((c) => (
            <li key={c.label} className="categories__item">
              <button
                type="button"
                className={`categories__card ${c.active ? "is-active" : ""}`}
              >
                <span className="categories__iconWrap" aria-hidden="true">
                  <img className="categories__icon" src={c.icon} alt="" />
                </span>

                <span className="categories__label">{c.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
