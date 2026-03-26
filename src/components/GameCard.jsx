import { useState } from "react";

function GameCard({ id, name, image, genres, size, preco, descricao }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div style={{ width: expanded ? "360px" : "180px", flexShrink: 0, background: "var(--bg-card)", border: "1px solid var(--border)", transition: "width 0.4s ease", overflow: "hidden", display: "flex", alignItems: "flex-start" }}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}>

            <img src={image} style={{ width: "180px", height: "252px", objectFit: "cover", flexShrink: 0 }} />

            <div style={{ padding: "12px", opacity: expanded ? 1 : 0, transition: "opacity 0.3s ease 0.2s", minWidth: "180px" }}>
                <h3 style={{ fontSize: "14px", color: "var(--text)", letterSpacing: "1px" }}>{name}</h3>
                <p style={{ fontSize: "12px", color: "var(--accent)", marginTop: "8px" }}>{preco}</p>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "8px", lineHeight: "1.6" }}>{descricao}</p>
            </div>

        </div>
    )

}

export default GameCard;