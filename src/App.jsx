import { BrowserRouter, Routes, Route, Link, useParams, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"


import "./App.css"

// Componentes

const slides = [
  {
    title: "Como Desbloquear PS3 com HEN",
    image: "https://i.ytimg.com/vi/uNZEg2G8F1Q/maxresdefault.jpg"
  },
  {
    title: "Top 10 Jogos de PS3",
    image: "https://sm.ign.com/t/ign_br/articlepage/i/igns-top-2/igns-top-25-playstation-3-games_zd4a.1280.jpg"
  },
  {
    title: "Instalar Multiman no PS3",
    image: "https://www.bing.com/th?id=OIP.bIhrS5NX5oto78HE3gZSIAHaEK"
  }
]

const posts = [
  {
    id: "instalar-hen",
    title: "Como instalar HEN no PS3",
    image: "https://th.bing.com/th/id/OIP.Q714dDPmhYQ1KcgLJpcgIwHaEK",
    category: "Tutorial",
    video: "https://www.youtube.com/embed/uNZEg2G8F1Q",
    content: `
    O PS3 HEN permite executar homebrew no PlayStation 3.

    PASSO 1
    Atualize o PS3 para o firmware correto.

    PASSO 2
    Acesse o navegador do PS3.

    PASSO 3
    Execute o exploit HEN.

    PASSO 4
    Instale o pacote HEN.

    Após isso o console estará desbloqueado.
    `
  },

  {
    id: "instalar-multiman",
    title: "Como instalar MultiMAN",
    image: "https://www.bing.com/th?id=OIP.bIhrS5NX5oto78HE3gZSIAHaEK",
    category: "Tutorial",
    video: "https://www.youtube.com/embed/uNZEg2G8F1Q",
    content: `
    O MultiMAN é o gerenciador de jogos mais popular do PS3.

    PASSO 1
    Baixe o arquivo PKG.

    PASSO 2
    Copie para um pendrive.

    PASSO 3
    No PS3 vá em Install Package Files.

    PASSO 4
    Execute o MultiMAN.

    Agora você poderá gerenciar seus jogos.
    `
  }
]

const games = [
  {

    id: "gta-vi",
    name: "Grand Theft Auto VI",
    image: "https://th.bing.com/th/id/R.1316de060b4f86a8b8019c0f94a33edb?rik=4wn9Z0E82BLTWQ&riu=http%3a%2f%2fwww.siradio.fm%2fupload%2fimages%2fgtasix.jpg&ehk=FVyrszz179KfCa9SkMSo%2bEPrABfSxRZS3ppfiEQvG4Y%3d&risl=&pid=ImgRaw&r=0",
    genre: "Ação / Mundo aberto",
    size: "18GB"
  },
  {
    id: "the-last-of-us",
    name: "The Last of Us",
    image: "https://th.bing.com/th/id/OIP.0i7KLwJfCZIRbqocPqGPKQHaIf?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Ação / Survival",
    size: "25GB"
  },
  {
    id: "god-of-war",
    name: "God of War",
    image: "https://th.bing.com/th/id/OIP.bpxOFTYdrmV5kYBy7-5N2gHaIe?w=144&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Hack and Slash",
    size: "35GB"
  },
  {
    id: "uncharted-3",
    name: "Uncharted 3",
    image: "https://tse1.mm.bing.net/th/id/OIP.mktX0_PL3tkW0zppHGQ2SwHaId?rs=1&pid=ImgDetMain&o=7&rm=3",
    genre: "Ação / Aventura",
    size: "20GB"
  },
  {
    id: "red-dead-redemption",
    name: "Red Dead Redemption",
    image: "https://th.bing.com/th/id/OIP.k4eLrDpvAL6h3VX5qGrxQQHaIh?w=165&h=187&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Mundo aberto",
    size: "8GB"
  },
  {
    id: "metal-gear-solid-5",
    name: "Metal Gear Solid 5",
    image: "https://th.bing.com/th/id/OIP.m9ZHhJw1e71kMQW4UR2zDAHaIh?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Stealth / Ação",
    size: "30GB"
  },
  {
    id: "gta-rio",
    name: "GTA Rio",
    image: "https://tse4.mm.bing.net/th/id/OIP.KWEE37Vdr846niFX9TWMJQHaI6?rs=1&pid=ImgDetMain&o=7&rm=3",
    genre: "Ação / Mundo aberto",
    size: "12GB"
  },
  {
    id: "call-of-duty",
    name: "Call of Duty: Modern Warfare",
    image: "https://th.bing.com/th/id/OIP.smQNIbvfIAH3M9UkpLLJtAHaIj?w=134&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "FPS / Ação",
    size: "40GB"
  },
  {
    id: "assassins-creed",
    name: "Assassin's Creed III",
    image: "https://th.bing.com/th/id/OIP.vmgW6MlniK4KqyC5UF1n7wHaIf?w=150&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Ação / Aventura",
    size: "28GB"
  },
  {
    id: "dark-souls",
    name: "Dark Souls",
    image: "https://th.bing.com/th/id/OIP.eevt5XIZUaLQbpFh2Wvd_QHaIh?w=159&h=182&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "RPG / Ação",
    size: "15GB"
  },
  {
    id: "minecraft",
    name: "Minecraft",
    image: "https://th.bing.com/th/id/OIP.vkbyuzg0ukdHSHwuEu-ikAHaIh?w=156&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Sandbox / Aventura",
    size: "5GB"
  },
  {
    id: "fifa-19",
    name: "FIFA 19",
    image: "https://th.bing.com/th/id/OIP.obMixmWtmRNV1aCmk-Ms6wHaHa?w=194&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Esporte",
    size: "10GB"
  },
  {
    id: "resident-evil",
    name: "Resident Evil",
    image: "https://th.bing.com/th/id/OIP.imYhf1MLc9xssIaxjdMntgHaIj?w=175&h=202&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Survival Horror",
    size: "22GB"
  },
  {
    id: "little-big-planet-3",
    name: "Little Big Planet 3",
    image: "https://th.bing.com/th/id/OIP.nLbtSUx8yzP4oM2FeNwVLgHaIj?w=128&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    genre: "Plataforma / Criativo",
    size: "8GB"
  }
]

const popularGames = [
  {
    name: "GTA VI",
    id: "gta-vi"
  },
  {
    name: "The Last of Us",
    id: "the-last-of-us"
  },
  {
    name: "God of War",
    id: "god-of-war"
  }
]

const downloadList = [
  {
    id: "multiman",
    name: "MultiMAN v4.85",
    type: "Homebrew",
    size: "35 MB",
    url: "https://example.com/multiman.pkg"
  },
  {
    id: "webman",
    name: "WebMAN Mod",
    type: "Plugin",
    size: "2 MB",
    url: "https://example.com/webman.pkg"
  },
  {
    id: "hen",
    name: "PS3 HEN (Última Versão)",
    type: "Exploit",
    size: "15 MB",
    url: "https://example.com/hen.pkg"
  },
  {
    id: "pkgi",
    name: "PKGi PS3",
    type: "Loja Homebrew",
    size: "8 MB",
    url: "https://example.com/pkgi.pkg"
  }
]

function Card({ id, title, image, category }) {
  return (
    <Link to={`/post/${id}`}>
      <div style={{
        width: "250px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderBottom: "2px solid var(--accent2)",
        overflow: "hidden",
        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer"
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-4px)"
          e.currentTarget.style.boxShadow = "0 0 20px var(--glow2)"
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        <img src={image} style={{ width: "100%", height: "150px", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "12px" }}>
          <p style={{ fontSize: "10px", color: "var(--accent2)", letterSpacing: "3px", marginBottom: "6px" }}>
            {category.toUpperCase()}
          </p>
          <h3 style={{ fontSize: "14px", color: "var(--text)", letterSpacing: "1px" }}>{title}</h3>
        </div>
      </div>
    </Link>
  )
}


// Páginas (Telas)

function Home() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000}>
        {slides.map((slide, i) => (
          <div key={i} style={{ position: "relative" }}>
            <img src={slide.image} style={{ height: "380px", objectFit: "cover", filter: "brightness(0.6)" }} />
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "30px",
              background: "linear-gradient(0deg, rgba(5,5,15,0.95) 0%, transparent 100%)",
              textAlign: "left"
            }}>
              <p style={{ fontSize: "10px", color: "var(--accent2)", letterSpacing: "4px", marginBottom: "8px" }}>DESTAQUE</p>
              <h2 style={{ fontSize: "22px", color: "var(--text)", letterSpacing: "3px", textShadow: "0 0 20px var(--glow)" }}>
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>

      <div style={{ marginTop: "40px" }}>
        <p className="section-title">Ultimos Tutoriais</p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {posts.map((post, i) => (
            <Card key={i} id={post.id} title={post.title} image={post.image} category={post.category} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Jogos() {
  const [search, setSearch] = useState("")
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))

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

function Tutoriais() {
  const [search, setSearch] = useState("")
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <p className="section-title">Tutoriais de PS3</p>

      <input
        className="input"
        type="text"
        placeholder="Buscar tutorial..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "24px" }}>
        {filteredPosts.length > 0
          ? filteredPosts.map((post, i) => (
              <Card key={i} id={post.id} title={post.title} image={post.image} category={post.category} />
            ))
          : <p style={{ color: "var(--text-muted)", letterSpacing: "2px", fontSize: "13px" }}>Nenhum tutorial encontrado.</p>
        }
      </div>
    </div>
  )
}

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

function Post() {
  const { id } = useParams()
  const post = posts.find(p => p.id === id)

  if (!post) return <h2 style={{ color: "var(--text-muted)", letterSpacing: "3px" }}>Tutorial não encontrado.</h2>

  return (
    <div style={{ maxWidth: "900px" }}>
      <p style={{ fontSize: "10px", color: "var(--accent2)", letterSpacing: "4px", marginBottom: "12px" }}>{post.category.toUpperCase()}</p>
      <h1 style={{ fontSize: "26px", letterSpacing: "3px", textShadow: "0 0 20px var(--glow)" }}>{post.title}</h1>

      <img src={post.image} style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginTop: "20px", borderBottom: "2px solid var(--accent2)" }} />

      {post.video && (
        <iframe width="100%" height="400" src={post.video} title="Tutorial"
          style={{ marginTop: "20px", border: "1px solid var(--border)", display: "block" }} allowFullScreen />
      )}

      <div style={{ marginTop: "30px", lineHeight: "1.8", fontSize: "15px", color: "var(--text-muted)", whiteSpace: "pre-line", borderLeft: "2px solid var(--accent2)", paddingLeft: "20px" }}>
        {post.content}
      </div>
    </div>
  )
}


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

function DownloadPage() {
  const { id } = useParams()
  const file = downloadList.find(d => d.id === id)

  if (!file) return <h2 style={{ color: "var(--text-muted)", letterSpacing: "3px" }}>Download não encontrado.</h2>

  return (
    <div>
      <p className="section-title">{file.name}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
        <p style={{ fontSize: "13px", letterSpacing: "2px" }}>
          <span style={{ color: "var(--accent2)" }}>TIPO — </span>{file.type}
        </p>
        <p style={{ fontSize: "13px", letterSpacing: "2px" }}>
          <span style={{ color: "var(--accent2)" }}>TAMANHO — </span>{file.size}
        </p>
      </div>
      <button className="btn" onClick={() => window.open(file.url)}>Baixar arquivo</button>
    </div>
  )
}

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


function Sobre() {
  return (
    <div style={{ maxWidth: "700px" }}>
      <p className="section-title">Sobre o MeuPS3</p>
      <p style={{ lineHeight: "1.8", fontSize: "14px", color: "var(--text-muted)", letterSpacing: "1px", borderLeft: "2px solid var(--accent2)", paddingLeft: "20px" }}>
        O MeuPS3 é um site dedicado ao PlayStation 3, com tutoriais,
        downloads de homebrew, listas de jogos e guias para desbloqueio do console.
        O objetivo é centralizar informações úteis para a comunidade.
      </p>
    </div>
  )
}

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