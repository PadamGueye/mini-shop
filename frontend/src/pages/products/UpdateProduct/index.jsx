import {useParams,useNavigate,Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

function UpdateProduct(){
    const navigate = useNavigate();
    const {id} = useParams();
    // const [product, setProduct] = useState({});
    const [name,setName]= useState('');
    const [description,setDescription]= useState('');
    const [price,setPrice]= useState(0);
    const [inStock,setInStock]= useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:4000/products/${id}`)
        .then((res)=> res.data.product )
        .then(product =>{
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setInStock(product.inStock)
        })
        .catch((error)=>console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    function handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        Update();
        navigate(`/products/product/${id}`);
    }

    async function Update(){
       const response = await axios.put(`http://localhost:4000/products/${id}`,{
            name : name,
            description :description,
            price: price,
            inStock: inStock
        });
       const res = await response.data
       console.log(res);
    }

    function onNameChange(e){
        setName(e.target.value);
    }

    function onDescriptionChange(e){
        setDescription(e.target.value);
    }
    function onPriceChange(e){
        setPrice(e.target.value);
    }
    function onStockChange(e){
        setInStock(e.target.checked);
    }


    return(<div>
        <h1>Modidication</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input required type="text" id="name" value={name} onChange={onNameChange} />

            <label htmlFor="description">Description</label>
            <input required type="description" value={description} onChange={onDescriptionChange} id="name"/>

            <label htmlFor="price">Price</label>
            <input required type="number" value={price} onChange={onPriceChange} id="price" />

            <label htmlFor="inStock">InStock</label>
            <input type="checkbox" checked={inStock} onChange={onStockChange} id="inStock" />

            <input type="submit" value="envoyer" />                
        </form  >
        <div><Link to='/'>Annuler</Link></div>

    </div>)
}

export default UpdateProduct;