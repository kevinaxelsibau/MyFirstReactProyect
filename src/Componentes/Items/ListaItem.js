// import ItemCaro from "./ItemCaro.js";
import Card from "../UI/Card";
import "./ListaItem.css";
import CostosFiltros from "../Costos/CostosFiltros.js";
import { useState } from "react/cjs/react.development";
import ExpensesList from "../Costos/CostosLista.js";
import ExpensesChart from "../Costos/CostosChart";


const ListaItem = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const FilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const FilterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

        
   return (
        <div>
            <Card className="expenses">
                <CostosFiltros selected={filteredYear}
                    onChangeFilter={FilterChangeHandler}
                />          
                <ExpensesChart expenses={FilterExpenses}/>
                <ExpensesList items={FilterExpenses}/>
            </Card>
        </div>
    );

};

export default ListaItem




//     // return (
//     //     <div>
//     //         <Card className="expenses">
//     //             <CostosFiltros selected={filteredYear}
//     //                 onChangeFilter={FilterChangeHandler}
//     //             />
//     //             {/* {props.items.map((expense) =>
//     //                 expense.date.getFullYear().toString() === filteredYear ? (
//     //                     <ItemCaro
//     //                         key={expense.id}
//     //                         title={expense.title}
//     //                         amount={expense.amount}
//     //                         date={expense.date} />
//     //                 ) : null
//     //             )} */}
                





//             </Card>
//         </div>
//     );
// };

// export default ListaItem
