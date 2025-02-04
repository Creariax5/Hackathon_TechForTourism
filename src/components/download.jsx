import React, { useState } from 'react';
import { Download } from 'lucide-react';
import HomePage from './homepage';

const DownloadApp = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f0f9f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    cardContent: {
      padding: '1.5rem'
    },
    imageContainer: {
      width: '100%',
      height: '100%',
    //   backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    image: {
      width: '70%',
      height: '70%',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#166534',
      marginBottom: '2rem',
      margin: 0
    },
    description: {
      color: '#4b5563',
      textAlign: 'center',
      marginBottom: '2rem',
      lineHeight: '1.5'
    },
    button: {
      width: '100%',
      backgroundColor: '#166534',
      color: 'white',
      fontWeight: '600',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '1rem',
      transition: 'background-color 0.2s',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    buttonHover: {
      backgroundColor: '#14532d'
    }
  };

  // If showHomePage is true, render the HomePage component
  if (showHomePage) {
    return <HomePage />;
  }

  // Otherwise, render the download page
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardContent}>
          {/* Image Container */}
          <div style={styles.imageContainer}>
            <img 
              src="public/assets/ecocash-logo.png"
              alt="App preview"
              style={styles.image}
            />
          </div>
          
          {/* Title */}
          <h1 style={styles.title}>
            Cannes Éco-Cash
          </h1>
          
          {/* Description */}
          <p style={styles.description}>
          Une Monnaie Verte pour un Tourisme Responsable !
          </p>
          
          {/* Download Button */}
          <button 
            style={{
              ...styles.button,
              ...(isHovered ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowHomePage(true)}
          >
            <Download size={24} />
            <span>Téléchargez l'app !</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;