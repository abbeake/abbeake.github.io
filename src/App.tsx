import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'sans-monospace',
    }}>
      <Header />
      <main style={{ flex: 1, padding: '1rem' }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;