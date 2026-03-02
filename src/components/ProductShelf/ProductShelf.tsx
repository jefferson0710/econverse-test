import { useEffect, useMemo, useState } from "react";
import "./ProductShelf.scss";
import ProductCard from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import { getProducts } from "../../services/products";
import type { Product } from "../../types/product";

const defaultTabs = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

type Props = {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  showTabs?: boolean; // 👈 NOVO
  tabs?: string[];
  className?: string;
};

export default function ProductShelf({
  title = "Produtos relacionados",
  subtitle = "Ver todos",
  showSubtitle = false,
  showTabs = true, // 👈 padrão continua mostrando
  tabs = defaultTabs,
  className = "",
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const visible = useMemo(() => {
    return products.slice(index, index + 4);
  }, [products, index]);

  const canPrev = index > 0;
  const canNext = index + 4 < products.length;

  function prev() {
    if (canPrev) setIndex((v) => Math.max(0, v - 1));
  }

  function next() {
    if (canNext) setIndex((v) => Math.min(products.length - 4, v + 1));
  }

  return (
    <section className={`shelf ${className}`} aria-label="Vitrine de produtos">
      <div className="shelf__container">
        <header className="shelf__header">
          <div className="shelf__line" />

          <div className="shelf__heading">
            <h2 className="shelf__title">{title}</h2>
            {showSubtitle && (
              <a className="shelf__subtitle" href="#">
                {subtitle}
              </a>
            )}
          </div>

          <div className="shelf__line" />
        </header>

        {/* 👇 AGORA AS TABS SÓ APARECEM SE showTabs = true */}
        {showTabs && (
          <div className="shelf__tabs" role="tablist" aria-label="Categorias">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                className={`shelf__tab ${t === activeTab ? "is-active" : ""}`}
                onClick={() => {
                  setActiveTab(t);
                  setIndex(0);
                }}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        <div className="shelf__carousel">
          <button
            className="shelf__arrow shelf__arrow--left"
            type="button"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Anterior"
          >
            <svg width="7.47" height="12.8" viewBox="0 0 10 16">
              <path
                d="M9 1L2 8L9 15"
                stroke="#111"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>

          <div className="shelf__grid">
            {visible.map((p) => (
              <ProductCard
                key={p.productName}
                product={p}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>

          <button
            className="shelf__arrow shelf__arrow--right"
            type="button"
            onClick={next}
            disabled={!canNext}
            aria-label="Próximo"
          >
            <svg width="7.47" height="12.8" viewBox="0 0 10 16">
              <path
                d="M1 1L8 8L1 15"
                stroke="#111"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>

      <ProductModal
        open={!!selected}
        product={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
