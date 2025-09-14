function Noticias() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Cabeçalho */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Notícias do Futebol Feminino</h1>
        <p className="text-lg text-gray-300">
          Fique por dentro de tudo que acontece no universo do futebol feminino.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg">Todas</button>
        <button className="bg-gray-800 hover:bg-purple-700 px-4 py-2 rounded-lg">Jogos</button>
        <button className="bg-gray-800 hover:bg-purple-700 px-4 py-2 rounded-lg">Atletas</button>
        <button className="bg-gray-800 hover:bg-purple-700 px-4 py-2 rounded-lg">Campeonatos</button>
        <button className="bg-gray-800 hover:bg-purple-700 px-4 py-2 rounded-lg">Mercado</button>
      </div>

      {/* Destaques */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img src="/noticia1.png" alt="Notícia" className="w-full h-56 object-cover" />
            <div className="p-5">
              <span className="text-sm text-purple-400 font-semibold">Atletas</span>
              <h3 className="text-xl font-bold mt-2">Seleção convoca jogadoras para amistosos</h3>
              <p className="text-gray-300 mt-2">
                A técnica divulgou lista com novidades para os próximos jogos.
              </p>
              <button className="mt-4 text-purple-400 hover:underline">Ler mais →</button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img src="/noticia2.jpg" alt="Notícia" className="w-full h-56 object-cover" />
            <div className="p-5">
              <span className="text-sm text-purple-400 font-semibold">Jogos</span>
              <h3 className="text-xl font-bold mt-2">Final do Brasileirão será neste domingo</h3>
              <p className="text-gray-300 mt-2">
                O clássico promete casa cheia e emoção para os torcedores.
              </p>
              <button className="mt-4 text-purple-400 hover:underline">Ler mais →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Todas as Notícias */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Todas as Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img src="/noticia3.jpg" alt="Notícia" className="w-full h-40 object-cover" />
            <div className="p-5">
              <span className="text-sm text-purple-400 font-semibold">Mercado</span>
              <h3 className="text-lg font-bold mt-2">Atacante assina com clube europeu</h3>
              <p className="text-gray-300 mt-2">Negociação envolve milhões e promete destaque.</p>
              <button className="mt-4 text-purple-400 hover:underline">Ler mais →</button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img src="/noticia4.webp" alt="Notícia" className="w-full h-40 object-cover" />
            <div className="p-5">
              <span className="text-sm text-purple-400 font-semibold">Campeonatos</span>
              <h3 className="text-lg font-bold mt-2">Semifinais definidas no Brasileiro</h3>
              <p className="text-gray-300 mt-2">Confrontos prometem grandes emoções na reta final.</p>
              <button className="mt-4 text-purple-400 hover:underline">Ler mais →</button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img src="/noticia5.avif" alt="Notícia" className="w-full h-40 object-cover" />
            <div className="p-5">
              <span className="text-sm text-purple-400 font-semibold">Jogos</span>
              <h3 className="text-lg font-bold mt-2">Clássico com casa cheia</h3>
              <p className="text-gray-300 mt-2">Ingressos esgotados em menos de 2 horas.</p>
              <button className="mt-4 text-purple-400 hover:underline">Ler mais →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Noticias