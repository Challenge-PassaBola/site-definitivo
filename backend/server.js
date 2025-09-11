const express =require("express");
const cors =require("cors");
const port =3001;
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // Validações simples
  if (!email || !email.includes("@")) {
    return res.status(400).json({ erro: "E-mail inválido." });
  }

  if (!senha || senha.length < 4) {
    return res.status(400).json({ erro: "A senha deve ter pelo menos 4 caracteres." });
  }
});

// Sobe o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});