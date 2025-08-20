import lainGif from '../assets/lain1999.gif';

function Home() {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
  
        {/* Frame around the gif */}
        <div
          style={{
            display: 'inline-block',
            border: '3px solid #918274',
            borderRadius: '12px',
            marginTop: '2rem',
            backgroundColor: '#1d2021',
          }}
        >
          <img
            src={lainGif}
            alt="Duck search gif"
            style={{ 
                maxWidth: '600px', 
                borderRadius: '8px',
                display: 'block', }}
          />
        </div>
  
        {/* Search Bar */}
        <form
          action="https://duckduckgo.com/"
          method="GET"
          target="_blank"
          style={{ marginTop: '2rem', fontFamily: 'monospace',}}
        >
          <input
            type="text"
            name="q"
            placeholder="Search DuckDuckGo"
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid #918274',
              width: '60%',
              maxWidth: '300px',
              fontFamily: 'monospace',
            }}
          />
          <button
            type="submit"
            style={{
              marginLeft: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#d3869b',
              border: 'none',
              borderRadius: '4px',
              color: '#1d2021',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
  
  export default Home;
  