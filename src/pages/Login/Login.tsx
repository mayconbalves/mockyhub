import { useState } from "react";
import { Navigate } from "react-router-dom";
import { login, register } from "../../Auth";
import { useUser } from "../../UserContext";

const Login = () => {
  const { user } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={containerStyle}>
      <h2>{mode === "login" ? "Login" : "Cadastro"}</h2>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <p>
        {mode === "login" ? "Não tem uma conta?" : "Já tem conta?"}{" "}
        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        >
          {mode === "login" ? "Criar conta" : "Fazer login"}
        </button>
      </p>
    </div>
  );
};

export default Login;

const containerStyle: React.CSSProperties = {
  maxWidth: 400,
  margin: "2rem auto",
  padding: "1rem",
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};
