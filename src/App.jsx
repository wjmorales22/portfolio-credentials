import { certificados } from './data';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mi Portafolio de Atestados</h1>
      <div style={{ display: 'grid', gap: '10px' }}>
        {certificados.map(c => (
          <div key={c.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{c.titulo}</h3>
            <a href={c.link} target="_blank" rel="noreferrer">Ver Documento</a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
