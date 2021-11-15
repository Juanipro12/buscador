import './App.css';
import { RecuperadorDatos } from "./componentes/recuperadorDatos";
import { Detalles } from "./paginas/detalles";
import { Routes, Route } from "react-router-dom";
import Menu from './componentes/nav';


function App() {

  return (
    <div className="App">
      <Menu/>
      <Routes>
      
      <Route path="/" element={<RecuperadorDatos/>} />
      <Route path="/:id" element={<Detalles/>} />
      
      </Routes>
    </div>
  );
}

export default App;
