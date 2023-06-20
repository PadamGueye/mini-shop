import {Link} from 'react-router-dom'

function ErrorProduct(){
    return (
        <div>Oupss il semble que ce produit n'est pas disponible oubien verifier les information fournie
        <Link to='/'>Home</Link>
        </div>
    )
}

export default ErrorProduct;