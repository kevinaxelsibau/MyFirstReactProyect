import { useState } from "react";

import "./CostosFormulario.css";

const CostosFormulario = (props) => {

    const [addingExpense, setaddingExpense] = useState(false)

    const [enteredTitle, setEnteredTitle] = useState(""),
        [enteredAmount, setEnteredAmount] = useState(""),
        [enteredDate, setEneteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //     setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const DateChangeHandler = (event) => {
        setEneteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveCostos(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEneteredDate("");

        setaddingExpense(false)

    };

    const cancelHandler = () => { setaddingExpense(false) ;
    
    }

    const addExpenseHandler = () => { setaddingExpense(true)
    
    }


    return (
        <form onSubmit={submitHandler}>
            {addingExpense ? (<>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={AmountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2020-01-01"
                            max="2028-12-31"
                            value={enteredDate}
                            onChange={DateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={cancelHandler}>Cancelar</button>
                    <button type="submit">Agregar Costos</button>
                </div>
            </>
            ) : <button onClick={addExpenseHandler}>Agregar Costo Nuevo</button>
            }

        </form>
    );

};

export default CostosFormulario;