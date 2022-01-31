import React from "react";

import CostosFormulario from "./CostosFormulario";
import "./Costos.css";


const Costos = (props) => {
    const saveCostosHandler = (enteredSaveCostos) => {
        const expenseData = {
            ...enteredSaveCostos,
            id: Math.random().toString()
        };
        props.onAddCostos(expenseData);
    };

    return (
        <div className="new-expense">
            <CostosFormulario onSaveCostos={saveCostosHandler} />
        </div>
    );
};

export default Costos;