import '../categoria/categoria.scss'
interface Props {
    nomeCategoria: any

}
function Categoria({nomeCategoria}: Props){
    return(
        <>
         <img src={nomeCategoria} alt="" className="img-btn"/>
        <button className="btn-categoria">
            <img src={nomeCategoria} alt="" className="img-btn"/></button>
            </>
    )
}
export default Categoria;