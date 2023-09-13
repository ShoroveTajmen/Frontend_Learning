/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './Cart.css'
const Cart = ({selectedActors, remaining, totalCost}) => {
    console.log(selectedActors);
    return (
        <div>
            <h3>Total Actors: {selectedActors.length}</h3>
            <h5>Remaining: {remaining}</h5>
            <h5>TotalCost: {totalCost}</h5>
            {selectedActors.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
        </div>
    );
};

export default Cart;