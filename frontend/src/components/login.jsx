import { useState } from "react";

function Login() {
  const [mensagem, setMensagem] = useState(""); // Estado para mensagens de erro ou sucesso
  const [isLogin, setIsLogin] = useState(true); // Alterna entre login e cadastro
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isLogin ? "login" : "register"; // Define o endpoint com base no estado
      const payload = isLogin
        ? { email: formData.email, senha: formData.password } // Backend espera "senha"
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          };

      const res = await fetch(`http://localhost:3000/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resultado = await res.json();
      if (!res.ok) {
        throw new Error(resultado.erro || "Erro desconhecido.");
      }

      setMensagem(resultado.sucesso || "Operação realizada com sucesso!");
    } catch (error) {
      setMensagem(error.message || "Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          {isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Esconder senha" : "Ver senha"}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        {mensagem && (
          <p className="text-center text-sm mt-4 text-red-500">{mensagem}</p>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin
              ? "Não tem uma conta? Cadastre-se"
              : "Já tem uma conta? Faça login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;