import { useState } from 'react';
import '../categoria/categoria.scss'
interface Props {
    nomeCategoria: string;
    btnSelecionando: boolean;
    label: string;
    onClick: () => void;
}
function Categoria({nomeCategoria, btnSelecionando, label, onClick}: Props){
    return(
        <>
        <button className={`btn-categoria ${btnSelecionando ? "active" : ""}`}
      onClick={onClick} >
            <img src={nomeCategoria} alt={label} className="img-btn"/></button>
            </>
            
    )
}
export default Categoria;