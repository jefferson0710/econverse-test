import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <section className="newsletter" aria-label="Newsletter">
      <div className="newsletter__container">
        <div className="newsletter__left">
          <h3 className="newsletter__title">Inscreva-se na nossa newsletter</h3>
          <p className="newsletter__text">
            Assine e receba novidades e conteúdos exclusivos do Econverse.
          </p>
        </div>

        <form className="newsletter__form">
          <input
            className="newsletter__input"
            type="text"
            placeholder="Digite seu nome"
            aria-label="Digite seu nome"
          />
          <input
            className="newsletter__input"
            type="email"
            placeholder="Digite seu e-mail"
            aria-label="Digite seu e-mail"
          />
          <button className="newsletter__btn" type="submit">
            INSCREVER
          </button>

          <label className="newsletter__terms">
            <input className="newsletter__input--checkbox" type="checkbox" />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
}
