import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function AllProduct(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/products")
        .then((res)=>setProducts(res.data.products))
        .catch((error)=>console.log(error));
    },[])


    return(
        <div>
            {products && products.map((product)=>{
                    return(<Link to={`/products/product/${product._id}`} key={product._id}> {product.name}</Link>)
                })}
        </div>
    )
}
export default AllProduct;