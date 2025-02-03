import React, { useState } from 'react';

const Navbar = () => {
  const menuItems = ['Accueil', 'Fonctionnement', 'Avantages', 'Partenaires', 'Contact'];
  
  return (
    <nav className="bg-green-700 border-gray-200 fixed w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold text-white">Éco-Cash</span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            {menuItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-green-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="accueil" className="pt-24 bg-green-600">
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Cannes Éco-Cash</h1>
      <p className="text-xl text-white mb-8">
        La monnaie locale qui récompense vos actions écologiques
      </p>
      <button className="bg-white text-green-700 font-bold py-2 px-6 rounded-full hover:bg-green-100">
        Rejoignez le mouvement
      </button>
    </div>
  </section>
);

const ProcessStep = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

const Fonctionnement = () => {
  const steps = [
    {
      title: "1. Inscrivez-vous",
      description: "Créez votre compte Éco-Cash en quelques clics et recevez votre portefeuille numérique."
    },
    {
      title: "2. Gagnez des points",
      description: "Adoptez des comportements écologiques et gagnez des Éco-Cash à chaque action vertueuse."
    },
    {
      title: "3. Dépensez local",
      description: "Utilisez vos Éco-Cash chez nos partenaires locaux engagés dans le développement durable."
    }
  ];

  return (
    <section id="fonctionnement" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Comment ça fonctionne ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AdvantageCard = ({ title, benefits }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-green-700 mb-4">{title}</h3>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index}>• {benefit}</li>
      ))}
    </ul>
  </div>
);

const Avantages = () => {
  const advantages = {
    users: {
      title: "Pour les utilisateurs",
      benefits: [
        "Récompenses pour vos actions écologiques",
        "Réductions chez les commerçants partenaires",
        "Contribution à l'économie locale",
        "Communauté engagée"
      ]
    },
    merchants: {
      title: "Pour les commerçants",
      benefits: [
        "Visibilité accrue",
        "Clientèle engagée",
        "Image éco-responsable",
        "Réseau de partenaires"
      ]
    }
  };

  return (
    <section id="avantages" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Les avantages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <AdvantageCard title={advantages.users.title} benefits={advantages.users.benefits} />
          <AdvantageCard title={advantages.merchants.title} benefits={advantages.merchants.benefits} />
        </div>
      </div>
    </section>
  );
};

const Partenaires = () => (
  <section id="partenaires" className="py-16">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos partenaires</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <img
              src="/api/placeholder/150/150"
              alt={`Logo partenaire ${index}`}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactez-nous</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border h-32"
              />
            </div>
            <button className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const quickLinks = ['Accueil', 'Fonctionnement', 'Avantages', 'Partenaires'];
  const socialMedia = ['Facebook', 'Twitter', 'Instagram'];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Éco-Cash</h3>
            <p>La monnaie verte de Cannes pour un tourisme responsable.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-green-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Nous suivre</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a key={social} href="#" className="hover:text-green-200">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 Cannes Éco-Cash. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <Hero />
    <Fonctionnement />
    <Avantages />
    <Partenaires />
    <ContactForm />
    <Footer />
  </div>
);

export default App;