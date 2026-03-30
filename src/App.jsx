import React, { useState, useMemo } from 'react';
import { certificados } from './data';
import './App.css';

const TIPO_COLORES = {
  'ACADÉMICO': '#1a237e',
  'TÍTULO': '#b71c1c',
  'ESPECIALIZACIÓN': '#4a148c',
  'CERTIFICACIÓN': '#2e7d32',
  'DIPLOMA': '#ef6c00',
  'IDIOMAS': '#00838f',
  'CURSO': '#455a64'
};

function App() {
  const [filtro, setFiltro] = useState('Todos');

  
  const categorias = useMemo(() => {
    return ['Todos', ...new Set(certificados.map(c => c.type))];
  }, []);

  
  const filtrados = useMemo(() => {
    return filtro === 'Todos' 
      ? certificados 
      : certificados.filter(c => c.type === filtro);
  }, [filtro]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Portafolio de Atestados</h1>
        <p className="subtitle">
          Ingeniería de Sistemas • Soporte TI • Ciberseguridad
        </p>
        
        <nav className="filter-nav">
          {categorias.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filtro === cat ? 'active' : ''}`}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <main className="grid">
        {filtrados.map((c) => (
          <article key={c.id} className="card">
            <span 
              className="badge" 
              style={{ backgroundColor: TIPO_COLORES[c.type] || '#757575' }}
            >
              {c.type}
            </span>
            
            <div className="card-image">
              <img src={c.thumbnail} alt={c.titulo} loading="lazy" />
            </div>

            <div className="card-content">
              <h3>{c.titulo}</h3>
              
              <div className="tags-container">
                {c.tags && c.tags.length > 0 ? (
                  c.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))
                ) : (
                  <span className="tag-empty">Formación complementaria</span>
                )}
              </div>

              <a 
                href={c.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-view"
              >
                📄 Ver documento
              </a>
            </div>
          </article>
        ))}
      </main>

      {filtrados.length === 0 && (
        <div className="no-results">
          <p>No se encontraron certificados en esta categoría.</p>
        </div>
      )}
    </div>
  );
}

export default App;