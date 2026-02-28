import "./navBar.scss"
import logo from "../../assets/images/logo.svg"
import { HeartIcon, MagnifyingGlassIcon, PackageIcon, ShoppingCartIcon, UserCircleIcon } from "@phosphor-icons/react";
function NavBar() {
    return(
        <nav className="container-nav">
            <img src={logo} alt="logo" className="logo"/>

            <div className="container-input">
            <input type="search" placeholder="O que você está buscando?" className="busca"/>
            
            <MagnifyingGlassIcon size={32} color="#9F9F9F" weight={"regular"}/>
            </div>


            <ul className="container-icon">
                <li className="container-td">
                <a href=""><ShoppingCartIcon size={32} color="#9F9F9F"/></a>
                <a href=""><UserCircleIcon size={32} color="#9F9F9F"/></a>
                <a href=""><HeartIcon size={32} color="#9F9F9F"/></a>
                <a href=""><PackageIcon size={32} color="#9F9F9F"/></a>
              
                </li>
            </ul>

        </nav>
    )
}
export default NavBar;