import React, { useState } from 'react';
import { MapPin, Award, Euro, Search, Wallet as WalletIcon, Map } from 'lucide-react';
import Wallet from './wallet';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('activities');
  const [showWallet, setShowWallet] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  
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
      name: "Marcheur",
      description: "Marcher 2km",
      reward: 15,
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

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
    },
    header: {
      backgroundColor: '#2E7D32',
      color: 'white',
      padding: '1rem',
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    walletButton: {
      backgroundColor: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    balance: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    searchContainer: {
      maxWidth: '1200px',
      margin: '1rem auto',
      padding: '0 1rem',
    },
    searchBar: {
      position: 'relative',
      width: '100%',
    },
    searchInput: {
      width: '100%',
      padding: '0.75rem',
      paddingRight: '3rem',
      borderRadius: '0.5rem',
      border: '1px solid #ccc',
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
    },
    tabButton: {
      padding: '0.5rem 1rem',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      marginRight: '1rem',
    },
    activeTab: {
      borderBottom: '2px solid #2E7D32',
      color: '#2E7D32',
    },
    content: {
      maxWidth: '1200px',
      margin: '1rem auto',
      padding: '0 1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
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
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      fontSize: '0.875rem',
      color: '#666',
    },
    points: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      backgroundColor: '#E8F5E9',
      color: '#2E7D32',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.875rem',
    },
    tag: {
      display: 'inline-block',
      backgroundColor: '#f5f5f5',
      color: '#666',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.875rem',
      marginTop: '0.5rem',
    },
    modal: {
      display: showMapModal ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    modalContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflow: 'auto',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  };

  if (showWallet) {
    return <Wallet />;
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <h2 style={styles.logo}>
              <br/>
              Cannes 
              <br/>
              Eco-Wallet
            </h2>
            <div style={styles.balance}>
              <Award size={20} />
              <span>1250 Eco-Coins</span>
            </div>
          </div>
          <button 
            style={styles.walletButton}
            onClick={() => setShowWallet(true)}
          >
            <WalletIcon size={20} />
          </button>
        </div>
      </header>

      <div style={styles.searchContainer}>
        <div style={styles.searchBar}>
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
          onClick={() => setActiveTab('activities')}
          style={{
            ...styles.tabButton,
            ...(activeTab === 'activities' ? styles.activeTab : {})
          }}
        >
          Activités
        </button>
        <button
          onClick={() => setActiveTab('challenges')}
          style={{
            ...styles.tabButton,
            ...(activeTab === 'challenges' ? styles.activeTab : {})
          }}
        >
          Défis
        </button>
        <button
          onClick={() => setShowMapModal(true)}
          style={{
            ...styles.tabButton,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Map size={16} />
          Carte
        </button>
      </div>

      {/* Map Modal */}
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <div style={styles.modalHeader}>
            <h4>Carte des Activités</h4>
            <button 
              style={styles.closeButton}
              onClick={() => setShowMapModal(false)}
            >
              ×
            </button>
          </div>
          <img 
            src="/assets/map.png" 
            alt="Carte des activités"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <main style={styles.content}>
        <div style={styles.grid}>
          {activeTab === 'activities' ? (
            activities.map(activity => (
              <div key={activity.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div>
                    <h3 style={styles.cardTitle}>{activity.name}</h3>
                    <p style={styles.cardDescription}>{activity.description}</p>
                    <div style={styles.location}>
                      <MapPin size={16} />
                      {activity.location}
                    </div>
                  </div>
                  <div style={styles.points}>
                    <Award size={16} />
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
                  <div>
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

export default HomePage;