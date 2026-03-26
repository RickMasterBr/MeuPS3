function NotFound() {
    return (
      <div>
        <h1 style={{ fontSize: "80px", color: "var(--accent)", textShadow: "0 0 40px var(--glow)", letterSpacing: "8px" }}>404</h1>
        <p style={{ color: "var(--text-muted)", letterSpacing: "3px", fontSize: "13px", marginTop: "12px" }}>Pagina não encontrada.</p>
        <Link to="/" style={{ display: "inline-block", marginTop: "20px" }}>
          <button className="btn">Voltar para Home</button>
        </Link>
      </div>
    )
  }

  export default NotFound;