import { useParams } from "react-router-dom"

import downloadList from "../data/downloadList"


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

  export default DownloadPage;