const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Simulação de banco de dados em memória
const users = [];

// Rota de login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // Validações simples
  if (!email || !email.includes("@")) {
    return res.status(400).json({ erro: "E-mail inválido." });
  }

  if (!senha || senha.length < 4) {
    return res.status(400).json({ erro: "A senha deve ter pelo menos 4 caracteres." });
  }

  // Verifica se o usuário existe
  const user = users.find((u) => u.email === email && u.senha === senha);
  if (!user) {
    return res.status(401).json({ erro: "Credenciais inválidas." });
  }

  return res.status(200).json({ sucesso: "Login realizado com sucesso!" });
});

// Rota de cadastro
app.post("/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validações simples
  if (!name || name.length < 3) {
    return res.status(400).json({ erro: "O nome deve ter pelo menos 3 caracteres." });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({ erro: "E-mail inválido." });
  }

  if (!password || password.length < 4) {
    return res.status(400).json({ erro: "A senha deve ter pelo menos 4 caracteres." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ erro: "As senhas não coincidem." });
  }

  // Verifica se o e-mail já está cadastrado
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ erro: "E-mail já cadastrado." });
  }

  // Adiciona o novo usuário ao "banco de dados"
  users.push({ name, email, senha: password });
  return res.status(201).json({ sucesso: "Usuário cadastrado com sucesso!" });
});

// Sobe o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});