import "./BrandSection.scss";
import brandLogo from "../../assets/icons/Logo.svg";

const brands = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  name: "Econverse",
  logo: brandLogo,
}));

export default function BrandSection() {
  return (
    <section className="brands">
      <div className="brands__container">
        <h2 className="brands__title">Navegue por marcas</h2>

        <div className="brands__grid">
          {brands.map((b) => (
            <div key={b.id} className="brands__item">
              <img src={b.logo} alt={b.name} className="brands__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
