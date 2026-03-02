import { useState } from "react";
import "./ProductSection.scss";

type TabKey =
  | "CELULAR"
  | "ACESSÓRIOS"
  | "TABLETS"
  | "NOTEBOOKS"
  | "TVS"
  | "VER TODOS";

const tabs: TabKey[] = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

export default function ProductSection() {
  const [active, setActive] = useState<TabKey>("CELULAR");

  return (
    <section className="products" aria-label="Produtos relacionados">
      <div className="products__container">
        <header className="products__header">
          <span className="products__line" aria-hidden="true" />
          <h2 className="products__title">Produtos relacionados</h2>
          <span className="products__line" aria-hidden="true" />
        </header>

        <div
          className="products__tabs"
          role="tablist"
          aria-label="Categorias de produtos"
        >
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active === t}
              className={`products__tab ${active === t ? "is-active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
