import {useEffect,useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';



function Product(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:4000/products/${id}`)
        .then((res)=>setProduct(res.data.product))
        .catch((error)=>setError(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function handleDelete(){
        axios.delete(`http://localhost:4000/products/${id}`)
        .then(res=>{console.log(res.data); setProduct(null)})
        .catch(error=> setError(error))
        navigate(`/products`)
    }
    if(!product || error){ return(navigate(`/products/errorProduct`))}
    return(
        <div>
            <ul>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.description}</li>
                <li>{product.inStock ? "Produit disponible" : "Produit indisponible"}</li>
            </ul>
            <div>
            <Link to={`/products/updateProduct/${id}`}>Modifer</Link>
            <button onClick={handleDelete} >Supprimer</button>
            </div>
        </div>
    )
}

export default Product