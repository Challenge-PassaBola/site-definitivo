const request = require("supertest");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const usuarios = [
  { email: "teste@email.com", senha: "1234" },
  { email: "joao@email.com", senha: "abcd" },
  { email: "maria@email.com", senha: "senha" }
];

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
    usuario: { email: usuario.email }
  });
});

describe("Testes de Login", () => {
  it("Deve retornar sucesso com credenciais válidas", async () => {
    const res = await request(app)
      .post("/login")
      .send({ email: "teste@email.com", senha: "1234" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("sucesso");
  });

  it("Deve falhar com e-mail inválido", async () => {
    const res = await request(app)
      .post("/login")
      .send({ email: "testeemail.com", senha: "1234" });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("erro");
  });

  it("Deve falhar com senha incorreta", async () => {
    const res = await request(app)
      .post("/login")
      .send({ email: "teste@email.com", senha: "errada" });

    expect(res.statusCode).toBe(401);
  });
});
