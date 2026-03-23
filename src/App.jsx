import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

const icons = {
  home: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>
  ),
  gamepad: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9h11a4.5 4.5 0 0 1 4.43 5.28l-.75 4.12a2.5 2.5 0 0 1-3.94 1.55l-2.54-1.82a3 3 0 0 0-3.4 0L8.76 20a2.5 2.5 0 0 1-3.94-1.55l-.75-4.12A4.5 4.5 0 0 1 8.5 9Z"/><path d="M8 12.5v3"/><path d="M6.5 14h3"/><circle cx="16.5" cy="13" r=".75" fill="currentColor" stroke="none"/><circle cx="18.5" cy="15" r=".75" fill="currentColor" stroke="none"/></svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v19H6.5A2.5 2.5 0 0 1 4 18.5v-14A2.5 2.5 0 0 1 6.5 2Z"/></svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z" fill="currentColor" stroke="none"/></svg>
  ),
  hardDrive: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15h16l-1.5-8h-13Z"/><path d="M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/></svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 1v4M14 1v4M10 19v4M14 19v4M19 10h4M19 14h4M1 10h4M1 14h4"/></svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20.59 13.41-7.18 7.18a2 2 0 0 1-2.82 0L3 13V3h10l7.59 7.59a2 2 0 0 1 0 2.82Z"/><circle cx="8.5" cy="8.5" r="1" fill="currentColor" stroke="none"/></svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
  ),
}

const heroSlides = [
  {
    id: 'hen',
    title: 'COMO INSTALAR HEN',
    subtitle: 'Guia completo para desbloquear, ativar homebrew e preparar o seu PS3 com segurança.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    primaryLabel: 'Ver Tutorial',
    secondaryLabel: 'Ler Artigo',
    route: '/post/instalar-hen',
  },
  {
    id: 'tlou',
    title: 'THE LAST OF US',
    subtitle: 'Página premium com specs, screenshots, trailer e download destacado.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    primaryLabel: 'Abrir Jogo',
    secondaryLabel: 'Explorar Coleção',
    route: '/jogo/the-last-of-us',
  },
  {
    id: 'multiman',
    title: 'MULTIMAN & FERRAMENTAS',
    subtitle: 'Downloads rápidos, utilitários e organização moderna em uma home estilo console.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1600&q=80',
    primaryLabel: 'Ver Downloads',
    secondaryLabel: 'Ler Artigo',
    route: '/downloads',
  },
]

const posts = [
  {
    id: 'instalar-hen',
    title: 'Como instalar HEN no PS3',
    kicker: 'Tutorial principal',
    image: heroSlides[0].image,
    category: 'Tutorial',
    video: 'https://www.youtube.com/embed/uNZEg2G8F1Q?rel=0',
    content: 'Atualize o firmware compatível, use o navegador do PS3 para abrir o exploit, ative o instalador e finalize a configuração do HEN para liberar homebrew, backups e utilitários.',
  },
  {
    id: 'instalar-multiman',
    title: 'Como instalar MultiMAN',
    kicker: 'Gestão de backups',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80',
    category: 'Tutorial',
    video: 'https://www.youtube.com/embed/uNZEg2G8F1Q?rel=0',
    content: 'Baixe o PKG, copie para o pendrive, instale pelo menu Install Package Files e organize suas ISOs, covers e atalhos.',
  },
]

const games = [
  {
    id: 'the-last-of-us',
    name: 'The Last of Us',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',
    preview: 'https://media.giphy.com/media/3o7TKsQ8UQNjQH8d2U/giphy.gif',
    backdrop: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    genre: 'Ação / Survival',
    tags: ['Ação', 'Narrativa', 'Survival'],
    size: '25 GB',
    format: 'PKG',
    firmware: '4.85+',
    category: 'Novidades',
    downloads: '1.2M',
    description: 'Viaje por uma América devastada em uma aventura cinematográfica marcada por combate tenso, stealth e narrativa emocional.',
    screenshots: [
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    ],
    trailer: 'https://www.youtube.com/embed/W01L70IGBgE?rel=0',
  },
  {
    id: 'god-of-war',
    name: 'God of War Ascension',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    preview: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
    backdrop: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80',
    genre: 'Hack and Slash',
    tags: ['Mitologia', 'Hack and Slash', 'Boss Fights'],
    size: '35 GB',
    format: 'ISO',
    firmware: '4.86+',
    category: 'Mais baixados',
    downloads: '940K',
    description: 'Kratos retorna com escala épica, arenas brutais e combates velozes para quem procura espetáculo puro.',
    screenshots: [
      'https://images.unsplash.com/photo-1514858280850-953a5f1f1f40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80',
    ],
    trailer: 'https://www.youtube.com/embed/BJ0o7rP6Idk?rel=0',
  },
  {
    id: 'red-dead-redemption',
    name: 'Red Dead Redemption',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80',
    preview: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
    backdrop: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    genre: 'Mundo aberto',
    tags: ['Velho Oeste', 'Open World', 'Aventura'],
    size: '8 GB',
    format: 'Folder / ISO',
    firmware: '4.84+',
    category: 'RPG',
    downloads: '820K',
    description: 'Explore desertos, caçadas, duelos e missões lendárias em uma das experiências de mundo aberto mais marcantes do PS3.',
    screenshots: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80',
    ],
    trailer: 'https://www.youtube.com/embed/-o7rES_3ymA?rel=0',
  },
  {
    id: 'dark-souls',
    name: 'Dark Souls',
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=900&q=80',
    preview: 'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
    backdrop: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    genre: 'RPG / Ação',
    tags: ['RPG', 'Soulslike', 'Desafio'],
    size: '15 GB',
    format: 'PKG',
    firmware: '4.85+',
    category: 'RPG',
    downloads: '610K',
    description: 'Sistema de progressão profundo, cenários opressivos e chefes brutais para quem quer dominar cada detalhe.',
    screenshots: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1200&q=80',
    ],
    trailer: 'https://www.youtube.com/embed/o1780AqAa20?rel=0',
  },
  {
    id: 'uncharted-3',
    name: 'Uncharted 3',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    preview: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
    backdrop: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80',
    genre: 'Ação / Aventura',
    tags: ['Aventura', 'Cinemático', 'Exploração'],
    size: '20 GB',
    format: 'ISO',
    firmware: '4.82+',
    category: 'Novidades',
    downloads: '700K',
    description: 'Set pieces cinematográficos, puzzles e perseguições explosivas fazem deste clássico uma vitrine do PS3.',
    screenshots: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    ],
    trailer: 'https://www.youtube.com/embed/DzfpyUB60YY?rel=0',
  },
]

const downloads = [
  { id: 'multiman', name: 'MultiMAN v4.85', type: 'Homebrew', size: '35 MB' },
  { id: 'webman', name: 'WebMAN Mod', type: 'Plugin', size: '2 MB' },
  { id: 'hen-file', name: 'PS3 HEN', type: 'Exploit', size: '15 MB' },
  { id: 'pkgi', name: 'PKGi PS3', type: 'Loja Homebrew', size: '8 MB' },
]

const navItems = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/jogo/the-last-of-us', label: 'Jogos', icon: 'gamepad' },
  { to: '/downloads', label: 'Downloads', icon: 'download' },
  { to: '/post/instalar-hen', label: 'Tutoriais', icon: 'book' },
]

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}

function Shell() {
  const location = useLocation()
  const navigate = useNavigate()
  const [commandOpen, setCommandOpen] = useState(false)
  const [commandQuery, setCommandQuery] = useState('')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const handler = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen(true)
      }
      if (event.key === 'Escape') {
        setCommandOpen(false)
        setLightbox(null)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const commandItems = useMemo(() => {
    const base = [
      ...games.map((game) => ({ type: 'Jogo', title: game.name, subtitle: game.genre, to: `/jogo/${game.id}` })),
      ...posts.map((post) => ({ type: 'Tutorial', title: post.title, subtitle: post.category, to: `/post/${post.id}` })),
      ...downloads.map((item) => ({ type: 'Download', title: item.name, subtitle: `${item.type} • ${item.size}`, to: '/downloads' })),
    ]
    const query = commandQuery.trim().toLowerCase()
    return query
      ? base.filter((item) => `${item.title} ${item.subtitle} ${item.type}`.toLowerCase().includes(query))
      : base.slice(0, 8)
  }, [commandQuery])

  return (
    <div className="app-shell">
      <Header onOpenCommand={() => setCommandOpen(true)} />
      <main key={location.pathname} className="page-shell route-fade">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jogo/:id" element={<GamePage onOpenLightbox={setLightbox} />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
          </Routes>
        </main>

      {commandOpen && (
        <CommandPalette
          query={commandQuery}
          setQuery={setCommandQuery}
          items={commandItems}
          onClose={() => setCommandOpen(false)}
          onSelect={(to) => { setCommandOpen(false); setCommandQuery(''); navigate(to) }}
        />
      )}

      {lightbox && (
        <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}

function Header({ onOpenCommand }) {
  return (
    <header className="floating-header">
      <Link to="/" className="brand-mark">MEUPS3</Link>
      <nav className="header-nav">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="icon">{icons[item.icon]}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <button type="button" className="command-trigger" onClick={onOpenCommand}>
        <span className="icon">{icons.search}</span>
        <span>Buscar</span>
        <kbd>Ctrl+K</kbd>
      </button>
    </header>
  )
}

function HomePage() {
  return (
    <div className="home-page">
      <HeroCarousel />
      <RevealSection>
        <section className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Destaques</span>
            <h2>Bento grid editorial com foco no que importa.</h2>
          </div>
          <BentoGrid />
        </section>
      </RevealSection>
      <RevealSection>
        <section className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Trilhos</span>
            <h2>Jogos organizados em faixas horizontais estilo console.</h2>
          </div>
          <GameRail title="Novidades" items={games.filter((game) => game.category === 'Novidades')} />
          <GameRail title="RPG" items={games.filter((game) => game.category === 'RPG')} />
          <GameRail title="Mais Baixados" items={games.filter((game) => game.category === 'Mais baixados')} />
        </section>
      </RevealSection>
    </div>
  )
}

function HeroCarousel() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero-carousel">
      {heroSlides.map((slide, slideIndex) => (
        <article
          key={slide.id}
          className={`hero-slide ${slideIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(180deg, rgba(9,9,12,0.15), rgba(9,9,12,0.92)), url(${slide.image})` }}
        >
          <div className="hero-content">
            <span className="eyebrow">Playstation 3 reimaginado</span>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="hero-actions">
              <Link to={slide.route} className="primary-btn"><span className="icon">{icons.play}</span>{slide.primaryLabel}</Link>
              <Link to={slide.route} className="secondary-btn">{slide.secondaryLabel}</Link>
            </div>
          </div>
        </article>
      ))}
      <div className="hero-pagination">
        {heroSlides.map((slide, slideIndex) => (
          <button key={slide.id} type="button" className={slideIndex === index ? 'active' : ''} onClick={() => setIndex(slideIndex)} />
        ))}
      </div>
    </section>
  )
}

function BentoGrid() {
  const leadPost = posts[0]
  const sideGames = games.slice(0, 2)
  return (
    <div className="bento-grid">
      <Link to={`/post/${leadPost.id}`} className="bento-card bento-main" style={{ backgroundImage: `linear-gradient(180deg, rgba(9,9,12,0.05), rgba(9,9,12,0.85)), url(${leadPost.image})` }}>
        <span className="pill">{leadPost.category}</span>
        <h3>{leadPost.title}</h3>
        <p>{leadPost.content}</p>
      </Link>
      {sideGames.map((game) => (
        <Link key={game.id} to={`/jogo/${game.id}`} className="bento-card bento-side" style={{ backgroundImage: `linear-gradient(180deg, rgba(9,9,12,0.15), rgba(9,9,12,0.85)), url(${game.image})` }}>
          <span className="pill">Popular</span>
          <h3>{game.name}</h3>
          <p>{game.genre}</p>
        </Link>
      ))}
      {downloads.slice(0, 3).map((item) => (
        <Link key={item.id} to="/downloads" className="bento-card bento-download">
          <span className="icon">{icons.download}</span>
          <strong>{item.name}</strong>
          <span>{item.size}</span>
        </Link>
      ))}
    </div>
  )
}

function GameRail({ title, items }) {
  return (
    <div className="rail-wrapper">
      <div className="rail-header">
        <h3>{title}</h3>
        <span>{items.length} títulos</span>
      </div>
      <div className="rail-track">
        {items.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  )
}

function GameCard({ game }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={`/jogo/${game.id}`}
      className={`game-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="game-media">
        <img src={hovered ? game.preview : game.image} alt={game.name} />
        <div className="game-overlay">
          <span className="pill">{game.genre}</span>
          <span className="pill pill-dark">Preview ativo</span>
        </div>
      </div>
      <div className="game-copy">
        <strong>{game.name}</strong>
        <span>{game.size}</span>
      </div>
    </Link>
  )
}

function GamePage({ onOpenLightbox }) {
  const { id } = useParams()
  const game = games.find((entry) => entry.id === id) ?? games[0]

  return (
    <div className="game-page" style={{ '--page-bg': `url(${game.backdrop})` }}>
      <div className="game-page-backdrop" />
      <div className="game-layout">
        <aside className="game-sidebar">
          <img className="game-cover" src={game.image} alt={game.name} />
          <button type="button" className="primary-btn large-btn">
            <span className="icon">{icons.download}</span>
            Download
          </button>
          <div className="spec-list">
            <Spec icon="hardDrive" label="Tamanho" value={game.size} />
            <Spec icon="file" label="Formato" value={game.format} />
            <Spec icon="cpu" label="Firmware" value={game.firmware} />
          </div>
        </aside>
        <section className="game-main">
          <span className="eyebrow">Página do jogo</span>
          <h1>{game.name}</h1>
          <div className="tag-row">
            {game.tags.map((tag) => <span key={tag} className="tag-chip"><span className="icon">{icons.tag}</span>{tag}</span>)}
          </div>
          <p className="game-description">{game.description}</p>
          <div className="content-card">
            <div className="section-heading compact">
              <h2>Galeria</h2>
              <span>Clique para ampliar</span>
            </div>
            <div className="screenshot-grid">
              {game.screenshots.map((shot) => (
                <button key={shot} type="button" className="shot-card" onClick={() => onOpenLightbox(shot)}>
                  <img src={shot} alt={`Screenshot de ${game.name}`} />
                </button>
              ))}
            </div>
          </div>
          <div className="content-card trailer-card">
            <div className="section-heading compact">
              <h2>Trailer</h2>
              <span>Embed elegante sem moldura pesada</span>
            </div>
            <div className="video-frame">
              <iframe src={game.trailer} title={`Trailer de ${game.name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function PostPage() {
  const { id } = useParams()
  const post = posts.find((entry) => entry.id === id) ?? posts[0]
  return (
    <article className="article-page">
      <div className="article-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(9,9,12,0.15), rgba(9,9,12,0.88)), url(${post.image})` }}>
        <span className="eyebrow">{post.kicker}</span>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <div className="article-body content-card">
        <p>Atualize o console para o firmware correto, prepare o dispositivo USB e use o navegador para abrir a etapa de ativação. Em seguida, execute a instalação do pacote, reinicie e confirme o ícone do HEN no XMB para garantir que o desbloqueio está pronto.</p>
        <div className="video-frame">
          <iframe src={post.video} title={post.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
      </div>
    </article>
  )
}

function DownloadsPage() {
  return (
    <section className="downloads-page section-block">
      <div className="section-heading">
        <span className="eyebrow">Downloads rápidos</span>
        <h2>Utilitários essenciais com leitura clara e foco em conversão.</h2>
      </div>
      <div className="downloads-grid">
        {downloads.map((item) => (
          <div key={item.id} className="download-card">
            <span className="icon">{icons.download}</span>
            <strong>{item.name}</strong>
            <p>{item.type}</p>
            <span>{item.size}</span>
            <button type="button" className="secondary-btn full">Baixar agora</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function CommandPalette({ query, setQuery, items, onClose, onSelect }) {
  return (
    <div className="command-backdrop" onClick={onClose}>
      <div className="command-modal" onClick={(event) => event.stopPropagation()}>
        <div className="command-input-row">
          <span className="icon">{icons.search}</span>
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque jogos, tutoriais e arquivos..." />
          <button type="button" className="icon-button" onClick={onClose}><span className="icon">{icons.x}</span></button>
        </div>
        <div className="command-results">
          {items.map((item) => (
            <button key={`${item.type}-${item.title}`} type="button" className="command-item" onClick={() => onSelect(item.to)}>
              <div>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
              <em>{item.type}</em>
            </button>
          ))}
          {items.length === 0 && <div className="empty-state">Nenhum resultado encontrado.</div>}
        </div>
      </div>
    </div>
  )
}

function Lightbox({ image, onClose }) {
  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button type="button" className="icon-button lightbox-close" onClick={onClose}><span className="icon">{icons.x}</span></button>
      <img src={image} alt="Screenshot ampliada" className="lightbox-image" />
    </div>
  )
}

function RevealSection({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      })
    }, { threshold: 0.2 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal-section ${visible ? 'visible' : ''}`}>{children}</div>
}

function Spec({ icon, label, value }) {
  return (
    <div className="spec-item">
      <span className="icon">{icons[icon]}</span>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </div>
  )
}

export default App
