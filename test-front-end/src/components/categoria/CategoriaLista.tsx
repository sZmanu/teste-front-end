import Categoria from "./Categoria";
import logo from "../../assets/images/logo.svg"
import '../categoria/categoriaLista.scss'

function CategoriaLista (){
    return(
<section className="categorias">
  <h2>Categorias</h2>

  <ul>
    <li>
      <Categoria nomeCategoria="../../assets/images/logo.svg"/>
    </li>
    <li>
      <button>Roupas</button>
    </li>
    <li>
      <button>Calçados</button>
    </li>
  </ul>
</section>
    )
}
export default CategoriaLista;