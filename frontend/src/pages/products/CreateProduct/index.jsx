import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateProduct(){
    const [name,setName]= useState('');
    const [description,setDescription]= useState('');
    const [price,setPrice]= useState(0);
    const [inStock,setInStock]= useState(false);
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        Poster();
        navigate('/products');
    }

    async function Poster(){
       const response = await axios.post(`http://localhost:4000/products`,{
            name : name,
            description :description,
            price: price,
            inStock: inStock
        });
       const res = await response.data
       console.log(res)
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


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input required type="text" id="name" value={name} onChange={onNameChange} />

                <label htmlFor="description">Description</label>
                <input required type="description" value={description} onChange={onDescriptionChange} id="name"/>

                <label htmlFor="price">Price</label>
                <input required type="number" value={price} onChange={onPriceChange} id="price" />

                <label htmlFor="inStock">InStock</label>
                <input type="checkbox" value={inStock} onChange={onStockChange} id="inStock" />

                <input type="submit" value="envoyer" />                
            </form  >
        </div>
    )
}
export default CreateProduct;