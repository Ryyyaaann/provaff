import React from 'react';
import './Navs.css';


function NavBar (){
    return(
        <div className='navbars'>
            <nav>
            <ul className='navs'>
                <img className='logosenai' src={require('../assets/SENAI.png')} alt=""/>
                <li className='itens'><a href='/' className='navs-link'>Home</a></li>

                <li className='itens'><a href='/contato' className='navs-link'>Contato</a></li>
                
                <li className='itens'><a href='/Quem somos' className='navs-link'>Quem Somos</a></li>
            </ul>
            </nav>
            
        </div>
    )
}

export default NavBar;
