import { useState } from "react";

import posts from "../data/posts";

import Card from "../components/Card";

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
  export default Tutoriais;