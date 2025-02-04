import React, { useState, useEffect } from 'react';
import { MapPin, Award, Euro, Search, ArrowRight, Menu, X } from 'lucide-react';

const ResponsiveApp = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('activities');

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

  const LandingPage = ({ onStart }) => (
    <div className="landing">
      <h1>Cannes Éco-Cash</h1>
      <p>La monnaie verte qui récompense vos choix écologiques à Cannes</p>
      <button onClick={onStart} className="start-button">
        Commencer maintenant
        <ArrowRight />
      </button>
    </div>
  );

  const HomePage = () => (
    <div className="home">
      <header>
        <div className="header-content">
          <h2>Cannes Éco-Cash</h2>
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="balance desktop-balance">
            <Euro size={20} />
            <span>1250 points</span>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="balance">
            <Euro size={20} />
            <span>1250 points</span>
          </div>
        </div>
      )}

      <div className="search-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Rechercher des activités, défis..."
            className="search-input"
          />
          <Search className="search-icon" size={20} />
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'activities' ? 'active' : ''}`}
          onClick={() => setActiveTab('activities')}
        >
          Activités
        </button>
        <button
          className={`tab ${activeTab === 'challenges' ? 'active' : ''}`}
          onClick={() => setActiveTab('challenges')}
        >
          Défis
        </button>
      </div>

      <main className="content">
        <div className="grid">
          {activeTab === 'activities'
            ? activities.map(activity => (
                <div key={activity.id} className="card">
                  <div className="card-header">
                    <div className="card-content">
                      <h3>{activity.name}</h3>
                      <p>{activity.description}</p>
                      <div className="location">
                        <MapPin size={16} />
                        {activity.location}
                      </div>
                    </div>
                    <div className="points">
                      <Award size={16} />
                      {activity.ecoPoints}
                    </div>
                  </div>
                  <div className="tag">{activity.category}</div>
                </div>
              ))
            : challenges.map(challenge => (
                <div key={challenge.id} className="card">
                  <div className="card-header">
                    <div className="card-content">
                      <h3>{challenge.name}</h3>
                      <p>{challenge.description}</p>
                    </div>
                    <div className="points">
                      <Award size={16} />
                      {challenge.reward}
                    </div>
                  </div>
                  <div className="tag">{challenge.difficulty}</div>
                </div>
              ))}
        </div>
      </main>
    </div>
  );

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .landing {
        min-height: 100vh;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        text-align: center;
      }

      .landing h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        color: #2E7D32;
        margin-bottom: 1rem;
      }

      .landing p {
        font-size: clamp(1rem, 3vw, 1.2rem);
        color: #333;
        margin-bottom: 2rem;
        max-width: 600px;
      }

      .start-button {
        background-color: #2E7D32;
        color: white;
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: background-color 0.2s;
      }

      .home {
        min-height: 100vh;
        background-color: #f5f5f5;
      }

      header {
        background-color: #2E7D32;
        color: white;
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .header-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .menu-button {
        display: none;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.5rem;
      }

      .balance {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #FFFFFF;
      }
      
      .balance span {
        color: #FFFFFF;
      }

      .mobile-menu {
        background-color: #1b5e20;
        padding: 1rem;
        text-align: center;
        display: none;
      }

      .search-container {
        max-width: 1200px;
        margin: 1rem auto;
        padding: 0 1rem;
      }

      .search-wrapper {
        position: relative;
        width: 100%;
      }

      .search-input {
        width: 100%;
        padding: 0.75rem;
        padding-right: 3rem;
        border-radius: 8px;
        border: 1px solid #ddd;
        font-size: 1rem;
      }

      .search-icon {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
      }

      .tabs {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        gap: 1rem;
      }

      .tab {
        padding: 0.75rem 1rem;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1rem;
        position: relative;
        color: #666;
      }

      .tab.active {
        color: #2E7D32;
      }

      .tab.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #2E7D32;
      }

      .content {
        max-width: 1200px;
        margin: 1rem auto;
        padding: 0 1rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
      }

      .card {
        background-color: white;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
      }

      .card-content h3 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .card-content p {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 0.5rem;
      }

      .location {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.875rem;
        color: #666;
      }

      .points {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background-color: #E8F5E9;
        color: #2E7D32;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .tag {
        display: inline-block;
        background-color: #f5f5f5;
        color: #666;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
      }

      @media (max-width: 768px) {
        .desktop-balance {
          display: none;
        }
        
        .menu-button {
          display: block;
        }

        .mobile-menu {
          display: block;
        }

        .grid {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      {currentPage === 'landing' ? (
        <LandingPage onStart={() => setCurrentPage('home')} />
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default ResponsiveApp;