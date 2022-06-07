import { Link } from "react-router-dom";
import { useFetchData } from "../../../hooks/UseFetchData";

const Products = (props) => {
    const [data] = useFetchData("http://localhost:5000/products",props);

    return (
        <div>
            {console.log(data)};
            Products of logged user

            <br /> 
            here, products of company will be rendered
            <Link to="/products/create">New Product</Link>
        </div>
    )
}


export default Products;