import "./navBar.scss"
import logo from "../../assets/images/logo.svg"
import { CreditCardIcon, CrownIcon, CrownSimpleIcon, HeartIcon, MagnifyingGlassIcon, PackageIcon, ShieldCheckIcon, ShoppingCartIcon, TruckIcon, UserCircleIcon } from "@phosphor-icons/react";
function NavBar() {
    return(
        <header className="container-header">
            <div className="container-info-site">
                <div className="container-info">
                    <ShieldCheckIcon size={20} color="#9F9F9F"/>
                    <h4>Compra <span>100% segura</span></h4>
                </div>
                <div className="container-info">
                    <TruckIcon size={20} color="#9F9F9F"/>
                    <h4><span >Frete grátis</span> acima de R$ 200</h4>
                </div>
                <div className="container-info">
                    <CreditCardIcon size={20} color="#9F9F9F"/>
                    <h4><span>Parcele</span> suas compras</h4>
                </div>
            </div>
        <nav className="container-nav">
            <img src={logo} alt="logo" className="logo"/>

            <div className="container-input">
            <input type="search" placeholder="O que você está buscando?" className="busca"/>
            
            <MagnifyingGlassIcon size={32} color="#9F9F9F" weight={"regular"}/>
            </div>


            <ul className="container-icon">
                <li className="container-td">
                <a href=""><PackageIcon size={32} color="#9F9F9F"/>
                   </a>
                <a href=""><HeartIcon size={32} color="#9F9F9F"/>
                    </a>
                <a href=""><UserCircleIcon size={32} color="#9F9F9F"/>
                   </a>
                <a href=""><ShoppingCartIcon size={32} color="#9F9F9F"/>
                    </a>
              
                </li>
            </ul>
        </nav>
        <div className="container-categoria-site">
            <h3>TODAS CATEGORIAS</h3>
            <h3>SUPERMERCADO</h3>
            <h3>LIVROS</h3>
            <h3>MODA</h3>
            <h3>LANÇAMENTO</h3>
            <h3><span>OFERTAS DO DIA</span></h3>
            <div className="container-assinatura">
                <CrownSimpleIcon size={20} color="#9F9F9F"/>
                <h3>ASSINATURA</h3>
            </div>
            
            

        </div>
        </header>
        
    )
}
export default NavBar;