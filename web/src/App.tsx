import React from 'react';
import "./sytles/global.css";
import "./sytles/pages/landing.css";
import logoImg from './images/logo.svg';
import { FiArrowRight } from 'react-icons/fi'
const App = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve Felicidade para o Mundo</h1>
          <p>Visite Orfanatos e Mude o Dia de Muitas Crianças</p>
        </main>
        <div className="location">
          <strong>São Paulo</strong>
          <span>Guarulhos</span>
        </div>
        <a href="#" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
