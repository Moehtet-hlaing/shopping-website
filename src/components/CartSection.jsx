import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "../assets/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <div className="flex flex-col min-h-[500px]">
      <div className="flex flex-col gap-5 p-2 ">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        {carts.length === 0 && (
          <img
            src={emptyCartImg}
            alt="empty"
            className="w-[200px] md:w-[300px]  block mx-auto mt-6 md:mt-2"
          />
        )}

      </div>
        <div className=" w-full bg-white px-2 mt-auto">
          <Container className="px-5">
            <div className=" border-t border-black flex justify-end gap-10 py-3">
              <div className=" text-right">
                <p className=" text-gray-500 text-sm md:text-base">Total</p>
                <p className=" text-sm md:text-base font-bold">{total.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500 text-sm md:text-base">Tax(10%)</p>
                <p className=" text-sm md:text-base font-bold">{tax.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500 text-sm md:text-base">Net Total</p>
                <p className=" text-lg md:text-2xl font-bold">{netTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className=" text-end mb-5">
              <Link className=" border border-black px-2 md:px-4 py-1 md:py-2 text-sm md:text-base ">Order Now</Link>
            </div>
          </Container>
        </div>
    </div>
  );
};

export default CartSection;
