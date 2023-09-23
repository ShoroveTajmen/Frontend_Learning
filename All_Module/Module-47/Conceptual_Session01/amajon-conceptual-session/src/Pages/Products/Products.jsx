import { useLoaderData } from "react-router-dom";
import ProductCards from "./ProductCards";


const Products = () => {
    const {products} = useLoaderData();
    console.log(products);
    return (
        <div className="grid grid-cols-3 gap-5 p-5">
            {
                products.map(product => <ProductCards key={product.id} product={product}></ProductCards>)
            }
        </div>
    );
};

export default Products;