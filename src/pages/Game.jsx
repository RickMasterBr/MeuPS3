import { useParams } from "react-router-dom"

import games from "../data/games"

function Game() {
    const { id } = useParams()
    const game = games.find(g => g.id === id)
  
    if (!game) return <h2 style={{ color: "var(--text-muted)", letterSpacing: "3px" }}>Jogo não encontrado.</h2>
  
    return (
      <div>
        <p className="section-title">{game.name}</p>
        <img src={game.image} style={{ width: "280px", border: "1px solid var(--border)", borderBottom: "2px solid var(--accent)", display: "block" }} />
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <p style={{ fontSize: "13px", letterSpacing: "2px" }}>
            <span style={{ color: "var(--accent2)" }}>GENERO — </span>{game.genre}
          </p>
          <p style={{ fontSize: "13px", letterSpacing: "2px" }}>
            <span style={{ color: "var(--accent2)" }}>TAMANHO — </span>{game.size}
          </p>
        </div>
      </div>
    )
  }

  export default Game;