import { useState } from "react";

export default function App() {
  const [endpoint, setEndpoint] = useState("/api/example");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState('{"message": "Hello World"}');

  const handleCreateMock = () => {
    alert(`Mock criado:\n${method} ${endpoint}\nResponse: ${response}`);
  };

  return (
    <div className="container">
      <h1>MockyHub</h1>

      <label>Endpoint</label>
      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="/api/example"
      />

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

      <button onClick={handleCreateMock}>Criar Mock</button>
    </div>
  );
}
