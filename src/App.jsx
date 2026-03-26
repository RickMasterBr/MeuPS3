import { BrowserRouter, Routes, Route, Link, useParams, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import games from "./data/games"
import slides from "./data/slides"
import posts from "./data/posts"
import popularGames from "./data/popularGames"
import downloadList from "./data/downloadList"

import Card from "./components/Card"

import Home from "./pages/Home"
import Jogos from "./pages/Jogos"
import Tutoriais from "./pages/Tutoriais"
import Downloads from "./pages/Downloads"
import Post from "./pages/Post"
import Game from "./pages/Game"
import DownloadPage from "./pages/DownloadPage"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"

import "./App.css"


function App() {


  return (

    <BrowserRouter>

      <div style={{ background: "#111", minHeight: "100vh", color: "white" }}>

        <header style={{
          background: "linear-gradient(180deg, #0a0a1f 0%, #05050f 100%)",
          padding: "0 30px",
          height: "70px",
          borderBottom: "2px solid var(--accent2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 4px 30px var(--glow2)"
        }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <h1 style={{
              color: "var(--accent)",
              fontSize: "28px",
              textShadow: "0 0 20px var(--glow), 0 0 40px var(--glow)",
              letterSpacing: "4px"
            }}>
              MEUPS3
            </h1>
            <span style={{ fontSize: "9px", color: "var(--accent2)", letterSpacing: "5px" }}>
              The PLAYSTATION 3 SITE
            </span>
          </div>

          <nav style={{ display: "flex", gap: "4px" }}>
            {[
              { to: "/", label: "Home" },
              { to: "/jogos", label: "Jogos" },
              { to: "/tutoriais", label: "Tutoriais" },
              { to: "/downloads", label: "Downloads" },
              { to: "/contato", label: "Contato" },
              { to: "/sobre", label: "Sobre" },
            ].map(({ to, label }) => (
              <NavLink key={to} to={to} style={({ isActive }) => ({
                padding: "6px 14px",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: isActive ? "#05050f" : "var(--text-muted)",
                background: isActive ? "var(--accent)" : "transparent",
                clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                boxShadow: isActive ? "0 0 12px var(--glow)" : "none",
                transition: "all 0.2s"
              })}>
                {label}
              </NavLink>
            ))}
          </nav>
        </header>

        <div style={{ display: "flex" }}>

          <aside style={{
            width: "220px",
            minHeight: "calc(100vh - 70px)",
            background: "var(--bg-sidebar)",
            borderRight: "2px solid var(--border)",
            padding: "24px 14px",
            flexShrink: 0
          }}>
            <p className="section-title">Navegação</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
              {[
                { to: "/", label: "Home" },
                { to: "/jogos", label: "Videojogos" },
                { to: "/tutoriais", label: "Tutoriais" },
                { to: "/downloads", label: "Downloads" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} style={({ isActive }) => ({
                    display: "block",
                    padding: "9px 12px",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    borderLeft: isActive ? "3px solid var(--accent)" : "3px solid transparent",
                    background: isActive ? "rgba(0,195,255,0.06)" : "transparent",
                    textShadow: isActive ? "0 0 10px var(--glow)" : "none",
                    transition: "all 0.2s"
                  })}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <p className="section-title" style={{ marginTop: "32px" }}>🔥 Populares</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {popularGames.map((game, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "var(--accent2)", fontSize: "11px" }}>0{i + 1}</span>
                  <Link to={`/jogo/${game.id}`} style={{
                    color: "var(--text-muted)",
                    fontSize: "12px",
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                  }}>
                    {game.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <main style={{ flex: 1, padding: "20px" }}>

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/jogos" element={<Jogos />} />

              <Route path="/tutoriais" element={<Tutoriais />} />

              <Route path="/downloads" element={<Downloads />} />

              <Route path="/download/:id" element={<DownloadPage />} />

              <Route path="/post/:id" element={<Post />} />

              <Route path="/jogo/:id" element={<Game />} />

              <Route path="/contato" element={<Contato />} />

              <Route path="/sobre" element={<Sobre />} />

              <Route path="*" element={<NotFound />} />

            </Routes>

          </main>

        </div>

        <footer style={{
          background: "var(--bg-sidebar)",
          borderTop: "2px solid var(--accent2)",
          padding: "24px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 -4px 30px var(--glow2)"
        }}>
          <div>
            <p style={{ color: "var(--accent)", fontSize: "18px", letterSpacing: "4px", textShadow: "0 0 10px var(--glow)" }}>MEUSP3</p>
            <p style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "3px", marginTop: "4px" }}>PLAYSTATION 3 FANSITE</p>
          </div>
          <p style={{ color: "var(--border)", fontSize: "11px", letterSpacing: "2px" }}>
            © {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS
          </p>
        </footer>

      </div>

    </BrowserRouter>

  )


}

export default App