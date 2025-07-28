import Container from './Container';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';


const Header = () => {
  const {carts} = useCartStore();
  return (

<header className=''>
     <Container>
      <div className=" flex justify-between items-center py-5 px-2">
      <Link to={"/"} className=' text-2xl md:text-3xl font-bold '>Online Shop</Link>
      <Link to={"/my-cart"} className=' border border-black text-sm md:text-base px-3 py-1 md:px-5 md:py-2 relative '>
        My Cart
        <span className=' inline-block bg-red-500 text-white px-1.5 md:px-3 md:py-1 text-[10px] md:text-xs absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'>{carts.length}</span>
      </Link>
     </div>
     </Container>
    </header>

  )
}

export default Header;