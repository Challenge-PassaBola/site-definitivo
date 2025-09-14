const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// ===============================
// Usuários "cadastrados"
// ===============================
const usuarios = [
  { email: "teste@email.com", senha: "1234" },
  { email: "joao@email.com", senha: "abcd" },
  { email: "maria@email.com", senha: "senha" },
];

// ===============================
// API de Login
// ===============================
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ erro: "E-mail inválido." });
  }

  if (!senha || senha.length < 4) {
    return res.status(400).json({ erro: "A senha deve ter pelo menos 4 caracteres." });
  }

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ erro: "E-mail ou senha incorretos." });
  }

  return res.status(200).json({
    sucesso: "Login realizado com sucesso!",
    usuario: { email: usuario.email },
  });
});

// ===============================
// API de Notícias
// ===============================
const noticias = [
  { id: 1, titulo: "Seleção feminina vence amistoso", conteudo: "O Brasil venceu por 2x0 em amistoso internacional." },
  { id: 2, titulo: "Campeonato nacional começa amanhã", conteudo: "Times se preparam para a estreia." },
];

app.get("/noticias", (req, res) => {
  res.json(noticias);
});

// ===============================
// API de Loja
// ===============================
const produtos = [
  { id: 1, nome: "Camisa Oficial", preco: 120 },
  { id: 2, nome: "Boné Feminino", preco: 60 },
];

app.get("/loja/produtos", (req, res) => {
  res.json(produtos);
});

// ===============================
// API de Contato (receber mensagem)
// ===============================
app.post("/contato", (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  // Aqui poderia salvar no banco de dados
  console.log("Mensagem recebida:", { nome, email, mensagem });

  res.status(200).json({ sucesso: "Mensagem enviada com sucesso!" });
});

// ===============================
// Subir servidor
// ===============================
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
