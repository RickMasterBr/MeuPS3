import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ id, title, image, category }) {

    const [expanded, setExpanded] = useState(false)
  
    return (
      <Link to={`/post/${id}`}>
        <div style={{
          width: "250px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderBottom: "2px solid var(--accent2)",
          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer"
        }}
          onMouseEnter={e => {
            setExpanded(true)
            e.currentTarget.style.transform = "translateY(-4px)"
            e.currentTarget.style.boxShadow = "0 0 20px var(--glow2)"
          }}
          onMouseLeave={e => {
            setExpanded(false)
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          <img src={image} style={{ width: "100%", height: "150px", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "12px" }}>
  
            <p style={{
              opacity: expanded ? 1 : 0,
              maxHeight: expanded ? "80px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.8s ease, opacity 0.5s ease"
            }}>
              Conteudo ao ser expandido
            </p>
  
            <p style={{ fontSize: "10px", color: "var(--accent2)", letterSpacing: "3px", marginBottom: "6px" }}>
              {category.toUpperCase()}
            </p>
            <h3 style={{ fontSize: "14px", color: "var(--text)", letterSpacing: "1px" }}>{title}</h3>
          </div>
        </div>
      </Link>
    )
  }

export default Card;