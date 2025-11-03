import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/Home.jsx";
import Loja from "./components/Loja.jsx";
import Sobre from "./components/Sobre.jsx";
import Login from "./components/login.jsx";
import Contato from "./components/Contato.jsx";
import Noticias from "./components/Noticias.jsx";
import Podcast from "./components/Podcast.jsx";
import Peneiras from "./components/Peneiras.jsx";
import Estatisticas from "./components/Estatisticas.jsx";

function Placeholder() {
  return (
    <div className="text-center text-white py-20">
      <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
        Página em Construção
      </h2>
      <p className="text-lg">Estamos trabalhando para trazer novidades em breve!</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/peneiras" element={<Peneiras />} />
          <Route path="/estatisticas" element={<Estatisticas />} />
          <Route path="/placeholder" element={<Placeholder />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
