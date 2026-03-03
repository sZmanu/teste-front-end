import './newsletter.scss';
function Newsletter (){
    return(
        <section className="container-letter">
                <div className='container-ajuste'>
                <div className='info-letter'>
                    <h2 className='title-letter'>Inscreva-se na nossa newsletter</h2>
                    <p className='descricao-letter'>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <div className='container-inputs-check'>

                <div className='container-inputs'>
                    <input type="search" placeholder="Digite seu nome" className="estilo-input"/>
                    <input type="search" placeholder="Digite seu email" className='estilo-input' />
                    <button className="btn-inscrever">INSCREVER</button>
                </div>
                <input type="checkbox" name="" id="" className='checkbox' />
                <label htmlFor="" className='text-label'>Aceito os termos e condições</label>
                </div>
                </div>
            </section>
    )
}
export default Newsletter;