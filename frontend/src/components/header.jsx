import { Link } from "react-router-dom";

function Header() {
  return (
<header className="border-b bg-gray-900 border-t border-gray-800 p-4 flex items-center justify-between shadow-md">
  {/* Logo */}
  <div className="flex items-center gap-2 text-white drop-shadow-md">
    <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full" />
    <h1 className="text-3xl font-bold">Passa a Bola</h1>
  </div>

  {/* Navegação */}
  <nav className="flex items-center gap-4">
    <Link to="/" className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">
      Início
    </Link>
    <Link to="/loja" className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">
      Lojas
    </Link>
    <Link to="/sobre" className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">
      Sobre
    </Link>
    <Link to="/contato" className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">
      Contato
    </Link>
    <Link to="/noticias" className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">
      Notícias
    </Link>
    <Link to="/podcast" className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">
      Podcast
    </Link>
    <Link to="/peneiras" className="px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition">
      Peneiras
    </Link>

    {/* Login separado */}
    <Link to="/login" className="ml-6 px-4 py-2 rounded-md border border-purple-700 text-purple-500 hover:bg-purple-700 hover:text-white transition flex items-center gap-2">
      <span className="material-icons">Login</span>
    </Link>
  </nav>
</header>
  );
}

export default Header;
