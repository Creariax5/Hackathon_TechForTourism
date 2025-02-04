import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import HomePage from './homepage';

const Wallet = () => {
  const [showHome, setShowHome] = useState(false);

  const handleAccessApp = () => {
    setShowHome(true);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '22px',
      fontFamily: 'Inter, system-ui, sans-serif',
      backgroundColor: '#fff',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    balance: {
      fontSize: 'clamp(32px, 6vw, 40px)',
      fontWeight: 'bold',
      color: '#2E7D32',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    cardContainer: {
      perspective: '1000px',
      marginBottom: '20px',
      width: '100%',
    },
    card: {
      backgroundColor: '#2E7D32',
      borderRadius: '16px',
      padding: 'clamp(24px, 6%, 32px)',
      color: 'white',
      minHeight: 'clamp(240px, 35vh, 300px)',
      position: 'relative',
      backgroundImage: 'linear-gradient(45deg, #2E7D32 0%, #1B5E20 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    cardWave: {
      position: 'absolute',
      top: '40%',
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 25 Q 25 0, 50 25 T 100 25' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
      backgroundSize: '100px 50px',
      backgroundRepeat: 'repeat',
    },
    cardChip: {
      width: 'clamp(32px, 8%, 40px)',
      height: 'clamp(24px, 6%, 30px)',
      backgroundColor: '#FFD700',
      borderRadius: '4px',
      marginBottom: 'clamp(20px, 4vh, 30px)',
    },
    cardNumber: {
      fontSize: 'clamp(28px, 5vw, 36px)',
      marginBottom: '20px',
    },
    cardHolder: {
      fontSize: 'clamp(18px, 4vw, 24px)',
      opacity: 0.9,
    },
    cardExpiry: {
      position: 'absolute',
      bottom: 'clamp(16px, 4%, 20px)',
      right: 'clamp(16px, 4%, 20px)',
      fontSize: 'clamp(12px, 2.5vw, 14px)',
    },
    button: {
      width: '100%',
      padding: 'clamp(16px, 4vh, 24px)',
      backgroundColor: '#2E7D32',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: 'clamp(18px, 4vw, 24px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      cursor: 'pointer',
      marginBottom: '20px',
      transition: 'background-color 0.2s',
    },
    transactionList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(12px, 3vh, 16px)',
    },
    transactionGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(8px, 2vh, 12px)',
    },
    transactionDate: {
      fontSize: 'clamp(12px, 2.5vw, 14px)',
      color: '#666',
      marginBottom: '4px',
    },
    transaction: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'clamp(16px, 3vh, 20px)',
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
    },
    transactionInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(8px, 2vw, 12px)',
      flex: 1,
    },
    transactionIcon: {
      width: 'clamp(36px, 8vw, 40px)',
      height: 'clamp(36px, 8vw, 40px)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 'clamp(16px, 4vw, 20px)',
      flexShrink: 0,
    },
    transactionDetails: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0,
    },
    transactionTitle: {
      fontSize: 'clamp(14px, 3vw, 16px)',
      fontWeight: '500',
      whiteSpace: 'nowrap',
      overflow: 'None',
      textOverflow: 'ellipsis',
    },
    transactionSubtitle: {
      fontSize: 'clamp(12px, 2.5vw, 14px)',
      color: '#666',
      whiteSpace: 'nowrap',
      overflow: 'None',
      textOverflow: 'ellipsis',
    },
    transactionAmount: {
      fontSize: 'clamp(14px, 3vw, 16px)',
      fontWeight: '500',
      flexShrink: 0,
      marginLeft: '12px',
    },
    positive: {
      color: '#2E7D32',
    },
    negative: {
      color: '#D32F2F',
    }
  };

  // Media queries
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @media (max-width: 480px) {
        body {
          font-size: 14px;
        }
      }
      
      @media (max-width: 360px) {
        body {
          font-size: 12px;
        }
      }
      
      @media (min-width: 768px) {
        body {
          background-color: #f5f5f5;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const transactions = [
    {
      date: "Aujourd'hui",
      items: [
        {
          icon: "🏃",
          title: "À marcher 10km",
          subtitle: "Défi réussi !",
          amount: "+ 50",
          type: "positive",
          iconBg: "#3F51B5"
        }
      ]
    },
    {
      date: "Hier",
      items: [
        {
          icon: "🍽️",
          title: "Réduction utilisé",
          subtitle: "Restaurant",
          amount: "- 1250",
          type: "negative",
          iconBg: "#E91E63"
        },
        {
          icon: "🛒",
          title: "Marché Forville",
          subtitle: "Activité",
          amount: "+ 120",
          type: "positive",
          iconBg: "#FF9800"
        },
        {
          icon: "🚌",
          title: "Prendre le bus",
          subtitle: "Défi réussi !",
          amount: "+ 15",
          type: "positive",
          iconBg: "#4CAF50"
        }
      ]
    }
  ];

  if (showHome)
    return <HomePage />;  // Return the imported HomePage component

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.balance}>
          1,250 
          <img src="/assets/eco_icon.png" alt="Eco-coin icon" style={{ width: '35%', height: 'auto' }}/>
        </div>
      </div>

      <div style={styles.cardContainer}>
        <img src="/assets/card.png" alt="card" style={{ width: '100%', height: 'auto' }}/>
      </div>

      <button 
        style={styles.button}
        onClick={handleAccessApp}
      >
        Accéder aux activités
        <ArrowRight size={20} />
      </button>

      <div style={styles.transactionList}>
        {transactions.map((group, groupIndex) => (
          <div key={groupIndex} style={styles.transactionGroup}>
            <div style={styles.transactionDate}>{group.date}</div>
            {group.items.map((transaction, index) => (
              <div key={index} style={styles.transaction}>
                <div style={styles.transactionInfo}>
                  <div style={{
                    ...styles.transactionIcon,
                    backgroundColor: transaction.iconBg
                  }}>
                    {transaction.icon}
                  </div>
                  <div style={styles.transactionDetails}>
                    <div style={styles.transactionTitle}>{transaction.title}</div>
                    <div style={styles.transactionSubtitle}>{transaction.subtitle}</div>
                  </div>
                </div>
                <div style={{
                  ...styles.transactionAmount,
                  ...(transaction.type === 'positive' ? styles.positive : styles.negative)
                }}>
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;