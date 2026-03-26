import { useState } from "react"
import { Link } from "react-router-dom"

import downloadList from "../data/downloadList"

function Downloads() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")
  
    const filteredDownloads = downloadList.filter(item => {
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === "all" || item.type === category
      return matchSearch && matchCategory
    })
  
    return (
      <div>
        <p className="section-title">Downloads de PS3</p>
  
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          {["all", "Homebrew", "Plugin", "Exploit", "Loja Homebrew"].map(cat => (
            <button key={cat} className="btn" onClick={() => setCategory(cat)}
              style={{ opacity: category === cat ? 1 : 0.4, fontSize: "10px", padding: "7px 16px" }}>
              {cat === "all" ? "Todos" : cat}
            </button>
          ))}
        </div>
  
        <input
          className="input"
          type="text"
          placeholder="Buscar arquivo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {filteredDownloads.length > 0 ? filteredDownloads.map((item, i) => (
            <div key={i} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent2)",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)"
            }}>
              <div>
                <p style={{ fontSize: "14px", letterSpacing: "2px", color: "var(--text)" }}>{item.name}</p>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px", letterSpacing: "1px" }}>
                  {item.type} — {item.size}
                </p>
              </div>
              <Link to={`/download/${item.id}`}>
                <button className="btn">Baixar</button>
              </Link>
            </div>
          )) : (
            <p style={{ color: "var(--text-muted)", letterSpacing: "2px", fontSize: "13px" }}>Nenhum arquivo encontrado.</p>
          )}
        </div>
      </div>
    )
  }

  export default Downloads;