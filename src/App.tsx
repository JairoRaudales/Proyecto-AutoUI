import  { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import RegistrationForm, { TableItem } from './components/RegistrationForm';


import Table from './components/Table';



function App() {

  const [tableItems, setTableItems] = useState<TableItem[]>([]);

  const handleAddItem = (item: TableItem) => {
    setTableItems([...tableItems, item]);
  };

  
  return (
    <div className="App">

      <header>
          <h1>Registro autos</h1>
      </header>

      <div className='registro'>
        <RegistrationForm handleAddItem={handleAddItem}
        
        />
        <Table tableItems={tableItems} />
      </div>

     

    </div>
  );
}

export default App;
