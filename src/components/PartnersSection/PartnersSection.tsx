import "./PartnersSection.scss";
import banner from "../../assets/banner 1.png";

export default function PartnersSection() {
  return (
    <section className="partners">
      <div className="partners__container">
        <div className="partners__grid">
          {[1, 2].map((item) => (
            <article
              key={item}
              className="partners__card"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className="partners__overlay">
                <h3 className="partners__title">Parceiros</h3>
                <p className="partners__desc">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <button className="partners__btn">CONFIRA</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
