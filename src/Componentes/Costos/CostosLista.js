// import React from "react";

import ItemCaro from "../Items/ItemCaro";
import "./CostosLista.css";


const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Lista no encontrada.</h2>;

    }

    return <ul className="expenses-list">
        {props.items.map((expense) =>
            <ItemCaro
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        )}



    </ul>


};

export default ExpensesList;