import React from "react";

import ItemFecha from "./ItemFecha";
import Card from "../UI/Card";
import "./ItemCaro.css";

function ItemCaro(props) {
    return (
        <Card className="expense-item">
            <ItemFecha date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price" >${props.amount}</div>
            </div>
        </Card>
    );
}
export default ItemCaro; 