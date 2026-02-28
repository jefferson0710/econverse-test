import ShieldCheck from "../../assets/icons/ShieldCheck.svg"
import Truck from "../../assets/icons/Truck.svg"
import CreditCard from "../../assets/icons/CreditCard.svg"
import "./Topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__container">

        <div className="topbar__item">
          <img src={ShieldCheck} alt="Compra segura" />
          <span>Compra <strong>100% segura</strong></span>
        </div>

        <div className="topbar__item">
          <img src={Truck} alt="Frete grátis" />
          <span><strong>Frete grátis</strong> acima de R$ 200</span>
        </div>

        <div className="topbar__item">
          <img src={CreditCard} alt="Parcele" />
          <span><strong>Parcele</strong> suas compras</span>
        </div>

      </div>
    </div>
  )
}