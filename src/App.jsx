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

    <Link to={`/post/${id}`} style={{ textDecoration: "none", color: "white" }}>

      <div style={{ width: "250px", background: "#1c1c1c", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>

        <img src={image} style={{ width: "100%", height: "150px", objectFit: "cover" }} />

        <div style={{ padding: "10px" }}>

          <p style={{ fontSize: "12px", color: "red", margin: "0 0 5px 0" }}>{category}</p>

          <h3 style={{ fontSize: "16px", margin: 0 }}>{title}</h3>

        </div>

      </div>

    </Link>
  )
}


// Páginas (Telas)

function Home() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>

      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000}>

        {slides.map((slide, i) => (

          <div key={i}>

            <img src={slide.image} style={{ height: "350px", objectFit: "cover" }} />

            <p className="legend">{slide.title}</p>

          </div>

        ))}

      </Carousel>

      <h2 style={{ marginTop: "30px" }}>Últimos tutoriais</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        {posts.map((post, i) => (

          <Card key={i} id={post.id} title={post.title} image={post.image} category={post.category} />

        ))}

      </div>

    </div>
  )
}

function Jogos() {

  const [search, setSearch] = useState("")
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>

      <h1>Jogos de PS3</h1>

      <input type="text" placeholder="Buscar jogo..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginTop: "20px", padding: "10px", width: "300px", borderRadius: "6px", border: "none", outline: "none" }} />

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>

        {filteredGames.map((game, i) => (
          <Link key={i} to={`/jogo/${game.id}`} style={{ textDecoration: "none", color: "white" }}>

            <div style={{ width: "200px", background: "#1c1c1c", borderRadius: "8px", overflow: "hidden" }}>

              <img src={game.image} style={{ width: "100%", height: "250px", objectFit: "cover" }} />

              <div style={{ padding: "10px" }}>

                <h3 style={{ fontSize: "16px" }}>{game.name}</h3>

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

      <h1>Tutorias de PS3</h1>

      <input type="text" placeholder="Buscar tutorial..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginTop: "20px", padding: "10px", width: "300px", borderRadius: "6px", border: "none", outline: "none" }} />

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>

        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
            <Card key={i} id={post.id} title={post.title} image={post.image} category={post.category} />
          ))
        ) : (
          <p>Nenhum tutorial encontrado</p>
        )}

      </div>

    </div>
  )
}

function Downloads() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  // Filtra os downloads
  const filteredDownloads = downloadList.filter(item => {

    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())

    const matchCategory = category === "all" || item.type === category

    return matchSearch && matchCategory
  })

  const handleDownload = (nome) => {
    alert(`A iniciar o download de: ${nome}`)
    // No futuro, aqui podes colocar a lógica real de download (window.open, etc)
  }

  return (
    <div>
      <h1>Downloads de PS3</h1>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>

        <button onClick={() => setCategory("all")}>Todos</button>

        <button onClick={() => setCategory("Homebrew")}>Homebrew</button>

        <button onClick={() => setCategory("Plugin")}>Plugins</button>

        <button onClick={() => setCategory("Exploit")}>Exploit</button>

      </div>

      <input
        type="text"
        placeholder="Buscar ficheiro..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: "20px", padding: "10px", width: "300px", borderRadius: "6px", border: "none", outline: "none" }}
      />

      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
        {filteredDownloads.length > 0 ? (
          filteredDownloads.map((item, i) => (
            <div key={i} style={{ background: "#1c1c1c", padding: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

              <div>
                <h3 style={{ margin: 0, fontSize: "18px" }}>{item.name}</h3>
                <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#ccc" }}>{item.type} • {item.size}</p>
              </div>

              <Link to={`/download/${item.id}`}>
                <button style={{ background: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                  Baixar
                </button>
              </Link>

            </div>
          ))
        ) : (
          <p>Nenhum ficheiro encontrado.</p>
        )}
      </div>
    </div>
  )
}

function Post() {

  const { id } = useParams()

  const post = posts.find(p => p.id === id)

  if (!post) {
    return <h2>Tutorial não encontrado</h2>
  }

  return (

    <div style={{ maxWidth: "900px" }}>

      <h1>{post.title}</h1>

      <img
        src={post.image}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          marginTop: "20px",
          borderRadius: "8px"
        }}
      />

      <p style={{ marginTop: "20px", color: "#aaa" }}>
        Categoria: {post.category}
      </p>

      {post.video && (

        <iframe
          width="100%"
          height="400"
          src={post.video}
          title="Tutorial video"
          style={{ marginTop: "20px", borderRadius: "8px" }}
          allowFullScreen
        />

      )}

      <div style={{
        marginTop: "30px",
        lineHeight: "1.6",
        fontSize: "18px",
        whiteSpace: "pre-line"
      }}>
        {post.content}
      </div>

    </div>

  )

}

function Game() {
  const { id } = useParams()

  const game = games.find(g => g.id === id)

  if (!game) {
    return <h2>Jogo não encontrado</h2>
  }

  return (

    <div>

      <h1>{game.name}</h1>

      <img src={game.image} style={{ width: "300px", marginTop: "20px" }} />

      <p style={{ marginTop: "20px" }}><strong>Gênero:</strong> {game.genre}</p>

      <p><strong>Tamanho:</strong> {game.size}</p>

    </div>

  )

}

function DownloadPage() {

  const { id } = useParams()

  const file = downloadList.find(d => d.id === id)

  if (!file) {
    return <h2>Download não encontrado</h2>
  }

  return (

    <div>

      <h1>{file.name}</h1>

      <p style={{ marginTop: "20px" }}><strong>Tipo:</strong> {file.type}</p>

      <p><strong>Tamanho:</strong> {file.size}</p>

      <button onClick={() => window.open(file.url)} style={{ marginTop: "20px", background: "red", border: "none", padding: "12px 25px", color: "white", fontWeight: "bold", borderRadius: "6px", cursor: "pointer" }}>
        Baixar arquivo
      </button>


    </div>

  )

}

function Contato() {

  return (

    <div style={{ maxWidth: "700px" }}>

      <h1>Contato</h1>

      <p>Se tiver dúvidas ou sugestões sobre o site, envie uma mensagem.</p>

      <form style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>

        <input
          type="text"
          placeholder="Seu nome"
          style={{ padding: "10px", borderRadius: "6px", border: "none" }}
        />

        <input
          type="email"
          placeholder="Seu email"
          style={{ padding: "10px", borderRadius: "6px", border: "none" }}
        />

        <textarea
          placeholder="Sua mensagem"
          rows="5"
          style={{ padding: "10px", borderRadius: "6px", border: "none" }}
        />

        <button
          style={{
            background: "red",
            border: "none",
            padding: "12px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Enviar mensagem
        </button>

      </form>

    </div>

  )

}

function Sobre() {

  return (

    <div style={{ maxWidth: "800px" }}>

      <h1>Sobre o MeuPS3</h1>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>

        O MeuPS3 é um site dedicado ao PlayStation 3, com tutoriais,
        downloads de homebrew, listas de jogos e guias para desbloqueio
        do console.

        O objetivo é centralizar informações úteis para a comunidade.

      </p>

    </div>

  )

}

function NotFound() {

  return (

    <div>

      <h1>404</h1>

      <p>Página não encontrada.</p>

      <Link to="/" style={{ color: "red" }}>Voltar para Home</Link>

    </div>

  )

}

function App() {


  return (

    <BrowserRouter>

      <div style={{ background: "#111", minHeight: "100vh", color: "white" }}>

        <header
          style={{
            background: "black",
            padding: "20px",
            borderBottom: "2px solid red",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <h1 style={{ margin: 0, color: "red" }}>MeuPS3</h1>

          <nav style={{ display: "flex", gap: "20px" }}>

            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>Home</NavLink>

            <NavLink to="/jogos" style={{ color: "white", textDecoration: "none" }}>Jogos</NavLink>

            <NavLink to="/tutoriais" style={{ color: "white", textDecoration: "none" }}>Tutoriais</NavLink>

            <NavLink to="/downloads" style={{ color: "white", textDecoration: "none" }}>Downloads</NavLink>

            <NavLink to="/contato" style={{ color: "white", textDecoration: "none" }}>Contato</NavLink>

            <NavLink to="/sobre" style={{ color: "white", textDecoration: "none" }}>Sobre</NavLink>

          </nav>

        </header>

        <div style={{ display: "flex" }}>

          <aside style={{ width: "250px", background: "#1a1a1a", padding: "20px" }}>

            <h3>Menu</h3>

            <ul style={{ listStyle: "none", padding: 0 }}>

              <li style={{ padding: "8px 0" }}>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                    textDecoration: "none",
                    fontWeight: isActive ? "bold" : "normal"
                  })}
                >
                  Home
                </NavLink>
              </li>

              <li style={{ padding: "8px 0" }}>
                <NavLink to="/jogos" style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal"
                })}>
                  Videojogos
                </NavLink>
              </li>

              <li style={{ padding: "8px 0" }}>
                <NavLink to="/tutoriais" style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal"
                })}>
                  Tutoriais
                </NavLink>
              </li>

              <li style={{ padding: "8px 0" }}>
                <NavLink to="/downloads" style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal"
                })}>
                  Downloads
                </NavLink>
              </li>

            </ul>

            <h3 style={{ marginTop: "30px" }}>🔥 Jogos populares</h3>

            <ul style={{ listStyle: "none", padding: 0 }}>

              {popularGames.map((game, i) => (

                <li key={i} style={{ padding: "6px 0" }}>

                  <Link to={`/jogo/${game.id}`} style={{ color: "#ccc", textDecoration: "none" }}>{game.name}</Link>

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

        <footer
          style={{
            background: "#000",
            marginTop: "40px",
            padding: "20px",
            textAlign: "center",
            borderTop: "2px solid red"
          }}
        >

          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} MeuPS3
          </p>

          <p style={{ marginTop: 8, color: "#888" }}>
            PlayStation 3 Community
          </p>

        </footer>

      </div>

    </BrowserRouter>

  )


}

export default App