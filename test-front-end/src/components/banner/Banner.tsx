import bannerImg from "../../assets/images/banner.svg"
import '../banner/banner.scss'
function Banner (){
    return(
        <section className="banner">
  <div className="container-info-banner">
    <h1>
      Venha conhecer nossas <br />
      promoções
    </h1>

    <h2 className="text-produtos-promo">
      <span className="span-banner">50% Off</span> nos produtos
    </h2>

    <button className="btn-produto">Ver produto</button>
  </div>
</section>
    )
    
}
export default Banner;