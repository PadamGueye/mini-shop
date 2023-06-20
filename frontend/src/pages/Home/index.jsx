import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <Link to='/products'> Products</Link>
            <Link to='/products/createProduct'> New Product</Link>
        </div>
    )
}

export default Home;