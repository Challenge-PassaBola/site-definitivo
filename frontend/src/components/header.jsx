      {/* Header */}
import { Link } from "react-router-dom";   
function Header(){
    return(
        <header className="bg-gray-900 border-t border-gray-800 p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 text-white drop-shadow-md">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full" />
            <img 
                src="/texto.png" 
                alt="Passa a Bola" 
                className="h-7 md:h-9" 
            />
          </div>
          <nav className="flex gap-6 text-white">
            <Link to="/" className="hover:text-blue-400 transition font-poppins">Início</Link>
            <Link to="/sobre" className="hover:text-blue-400 transition font-poppins">Sobre</Link>
            <Link to="/contato" className="hover:text-blue-400 transition font-poppins">Contato</Link>
            <Link to="/login" className="hover:text-blue-400 transition font-poppins">Login</Link>
        </nav>
    </header>
    )
}
export default Header