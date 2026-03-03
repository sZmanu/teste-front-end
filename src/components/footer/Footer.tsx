import '../footer/footer.scss'
import logo from "../../assets/images/logo.svg"
import facebook from '../../assets/images/facebook.svg'
import linkedin from '../../assets/images/linkedin.svg'
import { InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
function Footer (){
    return(
        <section>

            

            <div className='container-footer-background'>
            <div className='container-footer'>
                <div className='container-redes'>
                    <img src={logo} alt="logo" className="logo-footer"/>
                    <p className='text-footer-logo'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                    <div className='redesSociais'>
                        <InstagramLogoIcon size={24} color='#1b1b1b'/>
                        <img src={facebook} className="img-icon-footer" alt='icone do facebook'/>
                        <img src={linkedin} className="img-icon-footer" alt='icone do facebook'/>

                    </div>
                </div>

                <div className='divider-footer'></div>
                <div className='container-info-footer'>
                    <h3 className='title-footer'>Institucional</h3>
                    <ul  className='estilo-link'>
                    <li className='text-footer'>Sobre Nós</li>
                    <li className='text-footer'>Movimento</li>
                    <li className='text-footer'>Trabalhe conosco</li>
                    </ul>
                </div>
                <div className='container-info-footer'>
                    <h3 className='title-footer'>Ajuda</h3>
                    <ul  className='estilo-link'>
                     <li className='text-footer'>Suporte</li>
                     <li className='text-footer'>Fale conosco</li>
                     <li className='text-footer'>Perguntas frequentes</li>
                     </ul>
                </div>
                <div className='container-info-footer'>
                    <h3 className='title-footer'>Termos</h3>
                    <ul className='estilo-link'>
                     <li className='text-footer'>Termos e Condições</li>
                     <li className='text-footer'>Politica de Privacidade</li>
                     <li className='text-footer'>Troca e Devolução</li>
                     </ul>
                </div>
            </div>
            <div className='rodape'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>

        </section>
    )
}
export default Footer;