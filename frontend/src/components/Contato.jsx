function Contato() {
  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center py-16 px-4 text-white">
      <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">Contato</h2>
      <p className="max-w-2xl text-lg mb-8 text-center drop-shadow-md">
        Tem dúvidas, sugestões ou deseja falar com nossa equipe?  
        Preencha o formulário abaixo ou envie um e-mail diretamente para:
        <span className="text-purple-400 font-semibold"> pixelforge603@gmail.com</span>
      </p>

      {/* Formulário */}
      <form className="w-full max-w-lg bg-gray-900/70 p-8 rounded-2xl shadow-lg space-y-4">
        <div>
          <label className="block text-left mb-2 font-semibold">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-left mb-2 font-semibold">E-mail</label>
          <input
            type="email"
            placeholder="seuemail@email.com"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-left mb-2 font-semibold">Mensagem</label>
          <textarea
            placeholder="Escreva sua mensagem..."
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg font-bold shadow-lg"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
export default Contato