import React, { useState } from 'react';
import { MapPin, Award, Euro, Search, ArrowRight, Menu, X } from 'lucide-react';
import ResponsiveApp from './components/ResponsiveApp';

const styles = {
  // Global styles
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  // Landing Page styles
  landing: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    textAlign: 'center',
  },
  landingTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: '#2E7D32',
    marginBottom: '1rem',
  },
  landingSubtitle: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    color: '#333',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  startButton: {
    backgroundColor: '#2E7D32',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background-color 0.2s',
  },

  // Home Page styles
  homePage: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2E7D32',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    fontWeight: 'bold',
    margin: 0,
  },
  menuButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  balance: {
    alignItems: 'center',
    gap: '0.5rem',
  },
  mobileMenu: {
    backgroundColor: '#1b5e20',
    padding: '1rem',
    textAlign: 'center',
    color: 'white',
  },
  searchContainer: {
    maxWidth: '100px',  // This is causing the overflow
    margin: '1rem auto',
    padding: '0 1rem',
},
  searchWrapper: {
    position: 'relative',
    width: '100%',
  },
  searchInput: {
    width: '100%',
    padding: '0.75rem',
    paddingRight: '3rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  searchIcon: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
  },
  tabs: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    borderBottom: '1px solid #e5e5e5',
    gap: '1rem',
  },
  tab: {
    padding: '0.75rem 1rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    position: 'relative',
    color: '#666',
  },
  activeTab: {
    color: '#2E7D32',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-1px',
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: '#2E7D32',
    },
  },
  content: {
    maxWidth: '1200px',
    margin: '1rem auto',
    padding: '0 1rem',
  },
  grid: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
    '@media (max-width: 640px)': {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  cardHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  cardDescription: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  location: {
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.875rem',
    color: '#666',
  },
  points: {
    alignItems: 'center',
    gap: '0.25rem',
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
  },
  tag: {
    backgroundColor: '#f5f5f5',
    color: '#666',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
  },
};

// Add media queries
const mediaQueries = `
  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = mediaQueries;
document.head.appendChild(styleSheet);

// Landing Page Component
const LandingPage = ({ onStart }) => {
  return (
    <div style={styles.landing}>
      <h1 style={styles.landingTitle}>Cannes Éco-Cash</h1>
      <p style={styles.landingSubtitle}>
        La monnaie verte qui récompense vos choix écologiques à Cannes
      </p>
      <button style={styles.startButton} onClick={onStart}>
        Commencer maintenant
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const [activeTab, setActiveTab] = useState('activities');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const activities = [
    {
      id: 1,
      name: "Musée de la Castre",
      description: "Visitez ce musée historique situé dans un château médiéval",
      location: "Le Suquet",
      ecoPoints: 50,
      category: "Culture"
    },
    {
      id: 2,
      name: "Marché Forville",
      description: "Marché local avec produits frais et artisanaux",
      location: "Centre-ville",
      ecoPoints: 30,
      category: "Shopping Local"
    },
    {
      id: 3,
      name: "Îles de Lérins",
      description: "Excursion en bateau électrique vers les îles",
      location: "Port",
      ecoPoints: 100,
      category: "Nature"
    }
  ];

  const challenges = [
    {
      id: 1,
      name: "Zéro déchet à la plage",
      description: "Ramassez des déchets sur la plage pendant 30 minutes",
      reward: 150,
      difficulty: "Facile"
    },
    {
      id: 2,
      name: "Transport Vert",
      description: "Utilisez les transports en commun pendant 3 jours",
      reward: 200,
      difficulty: "Moyen"
    },
    {
      id: 3,
      name: "Écotouriste Expert",
      description: "Visitez 5 lieux culturels à pied",
      reward: 300,
      difficulty: "Difficile"
    }
  ];

  return (
    <div style={styles.homePage}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>Cannes Éco-Cash</h1>
          
          <button 
            className="menu-button"
            style={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="desktop-balance" style={styles.balance}>
            <Euro size={20} />
            <span>1250 points</span>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu" style={styles.mobileMenu}>
          <div style={styles.balance}>
            <Euro size={20} />
            <span>1250 points</span>
          </div>
        </div>
      )}

      <div style={styles.searchContainer}>
        <div style={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Rechercher des activités, défis..."
            style={styles.searchInput}
          />
          <Search style={styles.searchIcon} size={20} />
        </div>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'activities' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('activities')}
        >
          Activités
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'challenges' ? styles.activeTab : {})
          }}
          onClick={() => setActiveTab('challenges')}
        >
          Défis
        </button>
      </div>

      <main style={styles.content}>
        <div className="grid" style={styles.grid}>
          {activeTab === 'activities' ? (
            activities.map(activity => (
              <div key={activity.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>{activity.name}</h3>
                    <p style={styles.cardDescription}>{activity.description}</p>
                    <div style={styles.location}>
                      <MapPin size={16} />
                      {activity.location}
                    </div>
                  </div>
                  <div style={styles.points}>
                    <Euro size={16} />
                    {activity.ecoPoints}
                  </div>
                </div>
                <div style={styles.tag}>{activity.category}</div>
              </div>
            ))
          ) : (
            challenges.map(challenge => (
              <div key={challenge.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>{challenge.name}</h3>
                    <p style={styles.cardDescription}>{challenge.description}</p>
                  </div>
                  <div style={styles.points}>
                    <Award size={16} />
                    {challenge.reward}
                  </div>
                </div>
                <div style={styles.tag}>{challenge.difficulty}</div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return <ResponsiveApp />;
};

export default App;