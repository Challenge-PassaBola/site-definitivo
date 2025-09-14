const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Usuários "cadastrados"
const usuarios = [
  { email: "teste@email.com", senha: "1234" },
  { email: "joao@email.com", senha: "abcd" },
  { email: "maria@email.com", senha: "senha" },
];

// Rota de login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // Validações
  if (!email || !email.includes("@")) {
    return res.status(400).json({ erro: "E-mail inválido." });
  }

  if (!senha || senha.length < 4) {
    return res.status(400).json({ erro: "A senha deve ter pelo menos 4 caracteres." });
  }

  // Verificar usuário
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ erro: "E-mail ou senha incorretos." });
  }

  // Sucesso
  return res.status(200).json({
    sucesso: "Login realizado com sucesso!",
    usuario: { email: usuario.email },
  });
});

// Sobe servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
