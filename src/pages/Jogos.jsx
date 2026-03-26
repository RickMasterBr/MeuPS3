import games from "../data/games"

import { useState } from "react"
import { Link } from "react-router-dom"

import GameCard from "../components/GameCard"


function Jogos() {
    const [search, setSearch] = useState("")
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
  
    const gamesByGenre = games.reduce((acc, game) => {
  
      game.genres.forEach(genre => {
        if (!acc[genre]) acc[genre] = []
        acc[genre].push(game)
      })
      return acc
    }, {})
  
    
  
    return (
      <div>
        <p className="section-title">Jogos de PS3</p>
  
        <input
          className="input"
          type="text"
          placeholder="Buscar jogo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        {Object.keys(gamesByGenre).map(genre => (
          <div key={genre}>
          <p>{genre}</p>
          <div style={{ display: "flex", gap: "16px" }}>
            {gamesByGenre[genre].map((game, i) => (
              <GameCard key={i} id={game.id} name={game.name} image={game.image} genres={game.genres} size={game.size} preco={game.preco} descricao={game.descricao} />
            ))}
          </div>
        </div>
        ))}
  
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
          {filteredGames.map((game, i) => (
            <Link key={i} to={`/jogo/${game.id}`}>
              <div style={{
                width: "180px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderBottom: "2px solid var(--accent)",
                overflow: "hidden",
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.boxShadow = "0 0 16px var(--glow)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <img src={game.image} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
                <div style={{ padding: "10px" }}>
                  <p style={{ fontSize: "11px", color: "var(--text)", letterSpacing: "1px" }}>{game.name}</p>
                  <p style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "4px", letterSpacing: "1px" }}>{game.genre}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  export default Jogos;