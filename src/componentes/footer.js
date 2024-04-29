import React from 'react';
import './footer.css';

function Footer (){
    return(
    <footer>
        <img className='logosenai' src={require('../assets/SENAI.png')} alt=""/>
        <div className='footerp'>
        <p>© 2024 Todos os direitos reservados ao povo do 3º/Informática para Internet.</p>
        <h5>Contato: almossar@cabacos.com</h5>
        </div>
     </footer>
    )
}

export default Footer;
