import React from 'react';
import './Quemsomos.css';


function Quemsomos (){
    return(
        <div className='somos'>
            <nav>
            <ul className='navs'>
                <img className='foto1' src={require('../assets/FOTO4.jpg')} alt=""/>
                <img className='foto2' src={require('../assets/TIGRE.jpg')} alt=""/>
            </ul>
            </nav>
            
        </div>
    )
}

export default Quemsomos;
