import "./ProductModal.scss";

type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type Props = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ open, product, onClose }: Props) {
  if (!open || !product) return null;

  const priceBRL = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label="Detalhes do produto"
    >
      <button
        className="modal__overlay"
        onClick={onClose}
        aria-label="Fechar modal"
      />

      <div className="modal__content">
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <div className="modal__body">
          <div className="modal__left">
            <img
              className="modal__img"
              src={product.photo}
              alt={product.productName}
            />
          </div>

          <div className="modal__right">
            <h2 className="modal__title">{product.productName}</h2>
            <p className="modal__price">{priceBRL}</p>

            <p className="modal__desc">{product.descriptionShort}</p>

            <a
              className="modal__link"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Veja mais detalhes do produto &gt;
            </a>

            <div className="modal__actions">
              <div className="modal__qty" aria-label="Quantidade">
                <button
                  className="modal__qtyBtn"
                  type="button"
                  aria-label="Diminuir"
                >
                  –
                </button>
                <span className="modal__qtyValue">01</span>
                <button
                  className="modal__qtyBtnA"
                  type="button"
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>

              <button className="modal__buy" type="button">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
