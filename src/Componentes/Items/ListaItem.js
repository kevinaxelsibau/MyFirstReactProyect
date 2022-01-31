import ItemCaro from "./ItemCaro.js";
import Card from "../UI/Card";
import "./ListaItem.css";
import CostosFiltros from "../Costos/CostosFiltros.js";
import { useState } from "react/cjs/react.development";

const ListaItem = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const FilterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card className="expenses">
                <CostosFiltros selected={filteredYear}
                    onChangeFilter={FilterChangeHandler}
                />
                {props.items.map((expense =>
                    <ItemCaro
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />))}

            </Card>
        </div>
    );
};

export default ListaItem