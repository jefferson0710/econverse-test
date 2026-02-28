import "./HeroBanner.scss"
import banner from "../../assets/Rectangle 250.png"

export default function HeroBanner() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero__overlay">
        <div className="hero__container">
          <h1 className="hero__title">
            Venha conhecer nossas <br />
            promoções
          </h1>

          <p className="hero__subtitle">
  <span>50% Off</span> nos produtos
</p>

<button className="hero__button" type="button">
  Ver produto
</button>
        </div>
      </div>
    </section>
  )
}