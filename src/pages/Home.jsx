import { Carousel } from 'react-responsive-carousel';
import Card from '../components/Card';
import slides from '../data/slides';
import posts from '../data/posts';

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

  export default Home;