import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
function Home() {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center min-h-[80vh]">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Bem-vindo ao <span className="bg-purple-900 rounded px-5">Passa a Bola</span>
      </h2>
      <img
        src="/banner.png"
        alt="Banner"
        className="rounded-2xl shadow-lg mb-6 w-full max-w-3xl"
      />
      <p className="max-w-2xl text-lg text-white drop-shadow-md bg-black/60 px-3 py-2 rounded">
        O Passa a Bola é um espaço para compartilhar notícias, histórias e curiosidades
        sobre o mundo do futebol. Aqui você encontra conteúdo dinâmico, acessível e
        feito para os verdadeiros apaixonados pelo esporte.
      </p>
    </div>
  );
}

function Sobre() {
  return (
    <div className="text-center text-black flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Sobre Nós</h2>
      <p className="max-w-2xl text-lg drop-shadow-md">
        Somos uma equipe dedicada a trazer informação e entretenimento sobre futebol.
        Nosso objetivo é aproximar os torcedores de seus times e do universo esportivo,
        com uma abordagem leve e divertida.
      </p>
      <img
        src="/assets/passabola.png"
        alt="Sobre"
        className="rounded-2xl shadow-lg mt-6 max-w-md"
      />
    </div>
  );
}

function Contato() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
        Contato
      </h2>
      <p className="max-w-2xl text-lg drop-shadow-md">
        Entre em contato conosco via email:</p>
      <p className="max-w-2xl text-lg drop-shadow-md">
        pixelforge603@gmail.com
      </p>
    </div>
  );
}

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
      <div className="min-h-screen bg-[url('/assets/passabola.png')] bg-cover bg-center relative font-[Nunito]">
        <div className="absolute inset-0 bg-black/10 -z-10"></div>

        {/* Header */}
      <Header />
        {/* Conteúdo */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/placeholder" element={<Placeholder />} />
          </Routes>
        </main>
      </div>
        {/* Footer */}
        <Footer />
    </Router>
  );
}
