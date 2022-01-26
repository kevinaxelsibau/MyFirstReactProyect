import ItemCaro from "./ItemCaro.js";
import Card from "../UI/Card";
import "./ListaItem.css";
function ListaItem({ expenses }) {
    return (
        <Card className="expenses">

            <ItemCaro
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ItemCaro
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ItemCaro
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ItemCaro
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </Card>
    );


}

export default ListaItem