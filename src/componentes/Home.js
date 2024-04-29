import React from 'react';
import './home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home (){
    return(
        <div>
        <div className='cabeçalho'>
            <h1>Bem-Vindo á nossa Página Inicial da nossa AV2</h1>
            <div className='conhecer'>Conheça os melhores Cosplays do SESI/SENAI</div>
        </div>

    <div className ='cosplays'>
        
        <section className='agrupamento'>
        <div className='Turma-Mônica'>
        <img className= 'tmn'src={require('../assets/TURMAM.jpg')} alt=""/>
            <h3>Povo da Turma da Mônica</h3>
            <p>Mônica, Cascão, Magali e Cebolinha.</p>
        </div>
        
        <div className='flanela'>
        <img className= 'ldc' src={require('../assets/FLANELA.jpg')} alt=""/>
            <h3>Flanelinha/ Ladrão de Celular</h3>
            <p>Eu dificilmente confiaria lavar meu carro com esse dai.</p>
        </div>
        
        <div className='Gotinha'>
        <img className= 'zgt' src={require('../assets/GOTINHA.jpg')} alt=""/>
            <h3>Zé Gotinha do SUS</h3>
            <p>Símbolo do SUS, terror das crianças</p>
        </div>
        </section>

    </div>
        </div>

    )
}

export default Home;