import { useParams } from "react-router-dom"

import posts from "../data/posts"

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

  export default Post;