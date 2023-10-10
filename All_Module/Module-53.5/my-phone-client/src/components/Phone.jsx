import { useLoaderData } from "react-router-dom";


const Phone = () => {
    const Phone = useLoaderData();
    console.log(Phone)
    return (
        <div>
            <h2>{Phone.name}</h2>
            <img src={Phone.image} alt="" />
        </div>
    );
};

export default Phone;