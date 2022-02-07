import React, { useState } from "react";

import Costos from "./Componentes/Costos/Costos";
import ListaItem from "./Componentes/Items/ListaItem";

const Data_INICIAL = [
  {
    id: 'e1',
    title: 'Papel de Baño',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Tv Nueva',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Repuestos de Autos',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Nuevo escritorio (Madera)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(Data_INICIAL);

  const AddCostosHandler = expenses => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  }


    return (
      <div>
        <Costos onAddCostos={AddCostosHandler} />
        <ListaItem items={expenses} />
      </div>
    )
  };


  export default App;
