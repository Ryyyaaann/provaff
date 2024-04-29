import './App.css';
import NavBar from './componentes/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Footer from './componentes/footer.js';
import Forms from './componentes/Forms.js';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        
        <Footer/>
      
    </div>
  );
}

export default App;
