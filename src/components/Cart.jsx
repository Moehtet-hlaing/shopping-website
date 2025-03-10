import React from 'react';
import useProductStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';

const Cart = ({cart:{id,productId,quantity}}) => {
  const {products} = useProductStore();
  const {increaseQuantity , decreaseQuantity, removeCart} = useCartStore();
  const product = products.find((el) => el.id === productId);
  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id)
  }

  const handleDecreaseQuantity = () => {
    if(quantity > 1){
      decreaseQuantity(id)
    }else{
      confirm("Do you want to remove this item from My Cart?") && removeCart(id)

    }
  }

  return (
    <div className=" border border-black p-5 grid grid-cols-6">
      <div className="col-span-1">
        <img src={product.image} className=' h-16' alt="" />
      </div>
      <div className="col-span-3">
        <p className='mb-4'>{product.title}</p>
        <p className='text-gray-600 '>{product.price}</p>
      </div>
      <div className="col-span-1">
      <p className=" mb-2">Quantity</p>
        <div className=" flex gap-3">
          <button onClick={handleDecreaseQuantity} className=" bg-black text-white px-2 py-0.5">-</button>
          {quantity}
          <button onClick={handleIncreaseQuantity} className=" bg-black text-white px-2 py-0.5">+</button>
        </div>
      </div>
      <div className="col-span-1">
        <p className='text-end text-xl font-bold'>{cost.toFixed(2)}</p>
      </div>
    </div>
    
  )
}

export default Cart