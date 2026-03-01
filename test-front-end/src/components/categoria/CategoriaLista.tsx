import Categoria from "./Categoria";
import computador from "../../assets/images/computador.svg"
import '../categoria/categoriaLista.scss'
import supermercado from '../../assets/images/supermercados.svg'
import whiskey from '../../assets/images/whiskey.svg'
import ferramentas from '../../assets/images/ferramentas.svg'
import saude from '../../assets/images/cuidados-de-saude.svg'
import esporte from '../../assets/images/corrida.svg'
import moda from '../../assets/images/moda.svg'
import { useState } from "react";

function CategoriaLista (){
  const categorias = ["tecnologia", "mercado", "bebidas", "ferramentas", "saude", "esporte", "moda"];

  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>("tecnologia");
  
    return(
<section className="categorias-lista">
  <ul className="container-lista-categorias">
    <li className="estilo-itens-categoria">
      <Categoria nomeCategoria={computador}
            label="Tecnologia"
            btnSelecionando={categoriaAtiva === "tecnologia"}
            onClick={() =>
            setCategoriaAtiva(
                categoriaAtiva === "tecnologia" ? null : "tecnologia"
              )
            } />

      <h3 className="estilo-label">Tecnologia</h3>
    </li>
    <li className="estilo-itens-categoria">
      <Categoria nomeCategoria={supermercado} 
            label="mercado"
            btnSelecionando={categoriaAtiva === "mercado"}
            onClick={() =>
            setCategoriaAtiva(
                categoriaAtiva === "mercado" ? null : "mercado"
              )
            }/>
       <h3 className="estilo-label">Supermercado</h3>
    </li>
    <li className="estilo-itens-categoria">
      <Categoria nomeCategoria={whiskey}
            label="bebidas"
            btnSelecionando={categoriaAtiva === "bebidas"}
            onClick={() =>
            setCategoriaAtiva(
                categoriaAtiva === "bebidas" ? null : "bebidas"
              )
            }/>
       <h3 className="estilo-label">Bebidas</h3>
    </li>
    <li className="estilo-itens-categoria">
      <Categoria nomeCategoria={ferramentas} 
            label="ferramentas"
            btnSelecionando={categoriaAtiva === "ferramentas"}
            onClick={() =>
            setCategoriaAtiva(
                categoriaAtiva === "ferramentas" ? null : "ferramentas"
              )
            }/>
             <h3 className="estilo-label">Ferramentas</h3>
    </li>
    <li className="estilo-itens-categoria">
      <Categoria nomeCategoria={saude} 
            label="saude"
            btnSelecionando={categoriaAtiva === "saude"}
            onClick={() =>
            setCategoriaAtiva(
                categoriaAtiva === "saude" ? null : "saude"
              )
            }/>
             <h3 className="estilo-label">Saúde</h3>
    </li>
    <li className="estilo-itens-categoria">
      <Categoria nomeCategoria={esporte} 
            label="esporte"
            btnSelecionando={categoriaAtiva === "esporte"}
            onClick={() =>
            setCategoriaAtiva(
                categoriaAtiva === "esporte" ? null : "esporte"
              )
            }/>
             <h3 className="estilo-label">Esportes e Fitness</h3>
    </li>
    <li className="estilo-itens-categoria">
      <Categoria nomeCategoria={moda} 
            label="moda"
            btnSelecionando={categoriaAtiva === "moda"}
            onClick={() =>
            setCategoriaAtiva(
                categoriaAtiva === "moda" ? null : "moda"
              )
            }/>
             <h3 className="estilo-label">Moda</h3>
    </li>
  </ul>
</section>
    )
}
export default CategoriaLista;