import "./ProductCard.scss";
import type { Product } from "../../types/product";

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const price = Number(product.price || 0);

  const priceBR = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const inst2x = (price / 2).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card" onClick={onClick} role="button" tabIndex={0}>
      <img
        className="card__img"
        src={product.photo}
        alt={product.productName}
      />
      <p className="card__name">{product.productName}</p>

      <div className="card__prices">
        <span className="card__old">R$ 30,90</span>
        <strong className="card__price">{priceBR}</strong>
      </div>

      <p className="card__inst">ou 2x de {inst2x} sem juros</p>

      <span className="card__ship">Frete grátis</span>

      <button className="card__btn" type="button">
        COMPRAR
      </button>
    </article>
  );
}
