function Contato() {
    return (
      <div style={{ maxWidth: "600px" }}>
        <p className="section-title">Contato</p>
        <p style={{ color: "var(--text-muted)", fontSize: "13px", letterSpacing: "1px", marginBottom: "24px" }}>
          Duvidas ou sugestoes? Envia uma mensagem.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input className="input" type="text" placeholder="Seu nome" />
          <input className="input" type="email" placeholder="Seu email" />
          <textarea className="input" placeholder="Sua mensagem" rows="5" style={{ resize: "vertical", maxWidth: "100%" }} />
          <div>
            <button className="btn">Enviar mensagem</button>
          </div>
        </div>
      </div>
    )
  }

  export default Contato;