import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCouunt = count + 1;
        setCount(newCouunt);
    }
    const handleReduuce = () => {
        const newCouunt = count - 1;
        setCount(newCouunt);
    }
    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduuce}>Reduce</button>
        </div>
    )
}