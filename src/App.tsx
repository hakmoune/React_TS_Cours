import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

interface IState {
  people: {
    name: string;
    img: string;
    age: number;
    note?: string;
  }[]
};

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "1.Lebron James",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "Ready to staying in the same team"
    },
    {
      name: "2.Koby Briant",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 14,
    },
    {
      name: "3.Mahdi Hakmoune",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 18,
      note: "Ready to staying in the same team"
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
