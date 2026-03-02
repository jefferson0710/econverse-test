import Topbar from "../../components/Topbar/Topbar";
import Header from "../../components/Header/Header";
import NavBar from "../../components/Navbar/NavBar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./home.scss";
import CategorySection from "../../components/CategorySection/CategorySection";
import ProductShelf from "../../components/ProductShelf/ProductShelf";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import BrandSection from "../../components/BrandSection/BrandSection";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="page">
      <Topbar />
      <Header />
      <NavBar />
      <main className="page__main">
        <HeroBanner />
        <CategorySection />
        <ProductShelf />
        <PartnersSection />
        <ProductShelf showTabs={false} showSubtitle />
        <PartnersSection />
        <BrandSection />
        <ProductShelf showTabs={false} showSubtitle />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
