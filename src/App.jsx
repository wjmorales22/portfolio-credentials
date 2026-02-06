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
        {certificados.map(c => (
          <article key={c.id} className="card">
            <span className="badge">ATESTADO</span>

            <h3>{c.titulo}</h3>

            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
            >
              📄 Ver documento
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
