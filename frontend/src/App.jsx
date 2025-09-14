import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Sobre from "./components/Sobre";
import Home from "./components/Home";
import Noticias from "./components/Noticias";
import Podcast from "./components/Podcast";
import Peneiras from "./components/Peneiras";
import Contato from "./components/Contato";
import Loja from "./components/Loja";
function Placeholder() {
  return (
    <div className="text-center text-white py-20">
      <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Página em Construção</h2>
      <p className="text-lg">Estamos trabalhando para trazer novidades em breve!</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
        {/* Header */}
      <Header />
        {/* Conteúdo */}
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/peneiras" element={<Peneiras />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
    </Router>
  );
}
