
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className='container'>
      <Count/>
    </div>
  );
}


// Ici j'ai crée le composant Count
const Count = () => {

  // j'ai utilsé ici le useState pour stocker la variable count localement, et j'ai l'inisialisé par 0.
  const [count, setCount] = useState(0); 

  // la fonction increment pour incrémenter la variable count
  const increment = () => {
    setCount(count + 1);
  }

  // la fonction decrement pour décrémenter la varaibla count
  const decrement = () => {
    setCount(count - 1);
  }

  // ici j'ai défini une varible pour stocker le nom de la class (soit blue ou rouge)
  var numberColor = '';

  // ici je test si le numéro (count) devient supérieure à 0, on utilise la class numberBlue pour afficher le numéro en blue.
  // sinon si le numéro devient inférieure à 0 on l'affiche en rouge.
  if (count > 0) {
    numberColor = 'numberBlue';
  } else if (count < 0) {
    numberColor = 'numberRed';
  }

  //ici le html du composant Count.
  return (
    <div>
      <h1 className={numberColor} >{count}</h1> 
      <div>
        <button className='btn btn-decrement' onClick={decrement}>-</button>
        <button className='btn btn-increment' onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
