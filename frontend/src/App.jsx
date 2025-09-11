import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center min-h-[80vh]">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Bem-vindo ao <span className="bg-blue-700 rounded px-2">Passa a Bola</span>
      </h2>
      <img
        src="/assets/passabolabanner.png"
        alt="Banner"
        className="rounded-2xl shadow-lg mb-6 w-full max-w-3xl"
      />
      <p className="max-w-2xl text-lg drop-shadow-md">
        O Passa a Bola é um espaço para compartilhar notícias, histórias e curiosidades
        sobre o mundo do futebol. Aqui você encontra conteúdo dinâmico, acessível e
        feito para os verdadeiros apaixonados pelo esporte.
      </p>
    </div>
  );
}

function Login() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
        Login
      </h2>
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
        <input
          type="email"
          placeholder="Seu Email"
          className="w-full border p-3 rounded focus:border-blue-700 outline-none"
        />
        <input
          type="text"
          placeholder="Senha"
          className="w-full border p-3 rounded focus:border-blue-700 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}


function Sobre() {
  return (
    <div className="text-center text-white flex flex-col items-center">
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
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Seu Nome"
          className="w-full border p-3 rounded focus:border-blue-700 outline-none"
        />
        <input
          type="email"
          placeholder="Seu Email"
          className="w-full border p-3 rounded focus:border-blue-700 outline-none"
        />
        <textarea
          placeholder="Sua Mensagem"
          className="w-full border p-3 rounded h-32 focus:border-blue-700 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition"
        >
          Enviar
        </button>
      </form>
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
        <header className="bg-[#192868cc] p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 text-white drop-shadow-md">
            <img src="/assets/logo.png" alt="Logo" className="h-12 w-12 rounded-full" />
            <h1 className="text-2xl font-bold">Passa a Bola</h1>
          </div>
          <nav className="flex gap-6 text-white">
            <Link to="/" className="hover:text-blue-400 transition">Início</Link>
            <Link to="/sobre" className="hover:text-blue-400 transition">Sobre</Link>
            <Link to="/contato" className="hover:text-blue-400 transition">Contato</Link>
            <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
          </nav>
        </header>

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

        {/* Footer */}
        <footer className="bg-[#192868cc] text-white text-right p-4 shadow-inner">
          <p className="drop-shadow-md">© 2025 Passa a Bola - Todos os direitos reservados</p>
        </footer>
      </div>
    </Router>
  );
}
