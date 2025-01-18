import Navigation from "./components/navigation";
import Header from "./components/header";
import Brands from "./components/beands";
import Feature from "./components/feature";
import Categories from "./components/categories";
import Style from "./components/style";
import Product from "./components/product";
import Footer from "./components/footer";

export default function page(){
  return(
    <>
      <Navigation/>
      <Header/>
      <Brands/>
      <Feature/>
      <Categories/>
      <Style/>
      <Product/>
      <Footer/>
    </>
  )
}