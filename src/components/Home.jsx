

import React, { useState, useEffect } from 'react';
import { Bell, Menu, X, ArrowRight, Map, Wallet, Users } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    app: {
      width: '100vw',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#2E7D32',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    header: {
      backgroundColor: '#1B5E20',
      padding: '1rem',
      color: 'white',
      width: '100%',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    menuButton: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
    },
    navLinks: {
      display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '60px' : 'auto',
      left: isMobile ? 0 : 'auto',
      right: isMobile ? 0 : 'auto',
      backgroundColor: isMobile ? '#1B5E20' : 'transparent',
      padding: isMobile ? '1rem' : 0,
      gap: isMobile ? '1rem' : '2rem',
      zIndex: 1000,
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
    },
    hero: {
      backgroundColor: '#F1F8E9',
      padding: '4rem 0',
      textAlign: 'center',
      width: '100%',
    },
    heroTitle: {
      fontSize: isMobile ? '36px' : '48px',
      color: '#1B5E20',
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: isMobile ? '18px' : '20px',
      color: '#333',
      marginBottom: '2rem',
    },
    features: {
      padding: '4rem 0',
      backgroundColor: 'white',
      width: '100%',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem',
      width: '100%',
    },
    featureCard: {
      padding: '2rem',
      backgroundColor: '#F1F8E9',
      borderRadius: '8px',
      textAlign: 'center',
    },
    featureIcon: {
      backgroundColor: '#2E7D32',
      color: 'white',
      padding: '1rem',
      borderRadius: '50%',
      display: 'inline-flex',
      marginBottom: '1rem',
    },
    featureTitle: {
      fontSize: '24px',
      color: '#1B5E20',
      marginBottom: '1rem',
    },
    featureDescription: {
      color: '#333',
      lineHeight: '1.6',
    },
    howItWorks: {
      padding: '4rem 0',
      backgroundColor: '#F1F8E9',
      width: '100%',
    },
    howItWorksTitle: {
      fontSize: isMobile ? '30px' : '36px',
      color: '#1B5E20',
      textAlign: 'center',
      marginBottom: '3rem',
    },
    steps: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '100%',
    },
    step: {
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: '2rem',
      flexDirection: isMobile ? 'column' : 'row',
    },
    stepNumber: {
      backgroundColor: '#2E7D32',
      color: 'white',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontSize: '24px',
      color: '#1B5E20',
      marginBottom: '0.5rem',
    },
    stepDescription: {
      color: '#333',
      lineHeight: '1.6',
    },
    footer: {
      backgroundColor: '#1B5E20',
      color: 'white',
      padding: '2rem 0',
      width: '100%',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '2rem' : 0,
    },
    footerSection: {
      flex: 1,
    },
    footerTitle: {
      fontSize: '20px',
      marginBottom: '1rem',
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>Éco-Cash</div>
          <button style={styles.menuButton} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink}>Fonctionnalités</a>
            <a href="#how-it-works" style={styles.navLink}>Comment ça marche</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Cannes Éco-Cash</h1>
          <p style={styles.heroSubtitle}>
          Une monnaie verte qui transforme chaque visiteur en acteur du changement !
          </p>
          <button style={styles.button}>
            Commencer maintenant <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section id="features" style={styles.features}>
        <div style={styles.container}>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Map size={24} />
              </div>
              <h3 style={styles.featureTitle}>Local & Durable</h3>
              <p style={styles.featureDescription}>
                Soutenez les commerces locaux engagés dans une démarche écologique
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Wallet size={24} />
              </div>
              <h3 style={styles.featureTitle}>Récompenses Vertes</h3>
              <p style={styles.featureDescription}>
                Gagnez des points en adoptant des comportements éco-responsables
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <Users size={24} />
              </div>
              <h3 style={styles.featureTitle}>Communauté Engagée</h3>
              <p style={styles.featureDescription}>
                Rejoignez une communauté de citoyens engagés pour l'environnement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" style={styles.howItWorks}>
        <div style={styles.container}>
          <h2 style={styles.howItWorksTitle}>Comment ça marche</h2>
          <div style={styles.steps}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Inscription</h3>
                <p style={styles.stepDescription}>
                  Créez votre compte Éco-Cash en quelques clics et recevez votre portefeuille numérique
                </p>
              </div>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Actions Vertes</h3>
                <p style={styles.stepDescription}>
                  Participez à des actions écologiques et cumulez des points Éco-Cash
                </p>
              </div>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>Utilisez vos Points</h3>
                <p style={styles.stepDescription}>
                  Dépensez vos points chez nos partenaires locaux engagés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>À propos</h3>
              <div style={styles.footerLinks}>
                <a href="#" style={styles.footerLink}>Notre mission</a>
                <a href="#" style={styles.footerLink}>L'équipe</a>
                <a href="#" style={styles.footerLink}>Partenaires</a>
              </div>
            </div>
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Ressources</h3>
              <div style={styles.footerLinks}>
                <a href="#" style={styles.footerLink}>Guide d'utilisation</a>
                <a href="#" style={styles.footerLink}>FAQ</a>
                <a href="#" style={styles.footerLink}>Blog</a>
              </div>
            </div>
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Contact</h3>
              <div style={styles.footerLinks}>
                <a href="#" style={styles.footerLink}>Support</a>
                <a href="#" style={styles.footerLink}>Presse</a>
                <a href="#" style={styles.footerLink}>Carrières</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
