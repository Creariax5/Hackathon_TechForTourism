import React, { useState } from 'react';
import { Wallet, Leaf, Activity, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const EcoCoinsApp = () => {
  const [coins, setCoins] = useState(0);
  const [activities, setActivities] = useState([]);

  const ecoActions = [
    { id: 1, name: 'Transport en commun', coins: 50, icon: Activity },
    { id: 2, name: 'Recyclage', coins: 30, icon: Leaf },
    { id: 3, name: 'Activité locale', coins: 40, icon: Award }
  ];

  const completeAction = (action) => {
    setCoins(prev => prev + action.coins);
    setActivities(prev => [...prev, { ...action, date: new Date().toLocaleDateString() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-2">Éco-Coins</h1>
          <p className="text-gray-600">Votre portefeuille écologique</p>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="text-green-500" />
              <span>Solde actuel: {coins} Éco-Coins</span>
            </CardTitle>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Actions Disponibles</h2>
            <div className="space-y-4">
              {ecoActions.map(action => (
                <Card key={action.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <action.icon className="text-green-500" size={24} />
                        <div>
                          <p className="font-medium">{action.name}</p>
                          <p className="text-sm text-gray-500">{action.coins} coins</p>
                        </div>
                      </div>
                      <button
                        onClick={() => completeAction(action)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Valider
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Activités Récentes</h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <activity.icon className="text-green-500" size={20} />
                        <div>
                          <p className="font-medium">{activity.name}</p>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                      <span className="text-green-500">+{activity.coins}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {activities.length === 0 && (
                <p className="text-gray-500 text-center p-4">Aucune activité pour le moment</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EcoCoinsApp;