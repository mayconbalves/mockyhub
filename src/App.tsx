import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "./Firebase";

export default function App() {
  const [endpoint, setEndpoint] = useState("/api/teste");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState('{"message": "Teste de conexão"}');
  const [loading, setLoading] = useState(false);

  const handleCreateMock = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, "mocks"), {
        endpoint,
        method,
        response,
        createdAt: serverTimestamp(),
      });
      alert("Mock salvo com sucesso no Firestore!");
    } catch (error) {
      alert("Erro ao salvar mock: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        padding: "1rem",
        background: "#fff",
        borderRadius: 8,
      }}
    >
      <h1>Teste de Mock Firestore</h1>

      <label>Endpoint</label>
      <input value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />

      <label>Método</label>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>

      <label>Resposta (JSON)</label>
      <textarea
        rows={6}
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />

      <button onClick={handleCreateMock} disabled={loading}>
        {loading ? "Salvando..." : "Salvar Mock"}
      </button>
    </div>
  );
}
