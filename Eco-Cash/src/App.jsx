import React, { useState } from 'react';
import { Leaf, Wallet, MapPin, Heart, Award } from 'lucide-react';

const styles = {
  nav: {
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 50
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  navButtons: {
    display: 'flex',
    gap: '1rem'
  },
  navButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  activeNavButton: {
    backgroundColor: 'white',
    color: '#16a34a'
  },
  hero: {
    background: 'linear-gradient(to bottom, #f0fdf4, white)',
    padding: '4rem 1rem'
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center'
  },
  title: {
    color: '#16a34a',
    fontSize: '2.5rem',
    marginBottom: '1.5rem'
  },
  subtitle: {
    color: '#4b5563',
    fontSize: '1.25rem',
    marginBottom: '2rem'
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  icon: {
    width: '3rem',
    height: '3rem',
    margin: '0 auto 1rem',
    color: '#16a34a'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  cardText: {
    color: '#4b5563'
  },
  section: {
    padding: '4rem 1rem'
  },
  sectionTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem'
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginBottom: '0.75rem'
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  const renderNav = () => (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <div style={styles.logo}>
          <Leaf />
          <span>Cannes Éco-Cash</span>
        </div>
        <div style={styles.navButtons}>
          {['Accueil', 'Fonctionnement', 'Gagner', 'Dépenser'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              style={{
                ...styles.navButton,
                ...(activeSection === item.toLowerCase() ? styles.activeNavButton : {})
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderHero = () => (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.title}>Cannes Éco-Cash</h1>
        <p style={styles.subtitle}>
          Transformez vos actions écologiques en récompenses
        </p>
        <div style={styles.cardGrid}>
          {[
            {
              icon: Award,
              title: 'Récompenses Écologiques',
              text: 'Gagnez des points en adoptant des comportements écoresponsables'
            },
            {
              icon: MapPin,
              title: 'Commerce Local',
              text: 'Soutenez les commerçants et artisans engagés dans une démarche durable'
            },
            {
              icon: Heart,
              title: 'Tourisme Responsable',
              text: 'Profitez de Cannes tout en préservant son environnement'
            }
          ].map((item, index) => (
            <div key={index} style={styles.card}>
              <item.icon style={styles.icon} />
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ... Rest of the component implementation following the same pattern,
  // replacing Tailwind classes with the style object

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {renderNav()}
      {activeSection === 'accueil' && renderHero()}
      {/* Add other section renders here */}
    </div>
  );
}

export default App;