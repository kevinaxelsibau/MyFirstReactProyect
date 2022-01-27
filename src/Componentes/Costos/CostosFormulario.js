import react, { useState } from "react";

import "./CostosFormulario.css";

const CostosFormulario = () => {
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEneteredDate] = useState("");
    const [enteredTitle, setEnteredTitle] = useState(""),
        [enteredAmount, setEnteredAmount] = useState(""),
        [enteredDate, setEneteredDate] = useState("");




    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const DateChangeHandler = (event) => {
        setEneteredDate(event.target.value)
    }

    return (<form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={AmountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2028-12-31" onChange={DateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Agregar Costos</button>
        </div>
    </form>
    );

};

export default CostosFormulario;