// App.jsx
import './App.css';
import { certificados } from './data';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Portafolio de Atestados</h1>
        <p className="subtitle">
          Certificaciones, constancias y documentos profesionales
        </p>
      </header>

      <section className="grid">
        {certificados.map((c) => (
          <article key={c.id} className="card">
            <span className="badge">ATESTADO</span>
            
            {/* Contenedor de la imagen */}
            <div className="card-image">
              <img 
                src={c.thumbnail} 
                alt={`Miniatura de ${c.titulo}`} 
                loading="lazy"
              />
            </div>

            <div className="card-content">
              <h3>{c.titulo}</h3>
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="btn-view"
              >
                📄 Ver documento
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
