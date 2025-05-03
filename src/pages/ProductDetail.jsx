import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";


const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();

  const currentProduct = products.find((product) => product.id == productId);
  const handleAdded = (event) => {
    event.stopPropagation();
    toast.error("Item is already in My Cart")
  }
  const handleAddCart = (event) => {
    event.stopPropagation();
    const newProduct = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newProduct);
  };

  return (
    <div>
      <Container className=" px-5">
        <BreadCrumb currentPageTitle="Product Detail" />
        <div className="border border-black p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="col-span-1 sm:w-3/4 ">
              <img
                src={currentProduct.image}
                className=" h-[200px] sm:h-auto sm:w-[400px] block sm:mx-auto mb-5 sm:mb-0"
                alt=""
              />
            </div>
            <div className="col-span-1 flex flex-col ">
              <h3 className=" text-3xl font-bold mb-5">
                {currentProduct.title}
              </h3>
              <p className=" inline-block bg-gray-300 text-gray-700 mb-3 px-3 py-1 items-start justify-start w-36 text-center text-nowrap">
                {currentProduct.category}
              </p>
              <p className="mb-3">{currentProduct.description}</p>
              <Rating rate={currentProduct.rating.rate} className="mb-3" />
              <div className="flex justify-between w-full items-center">
                <p className="">Price:({currentProduct.price})</p>
         
                {carts.find((cart) => cart.productId === currentProduct.id) ? (
          <button onClick={handleAdded} className=" text-sm border border-black bg-black text-white px-3 py-1">
            Added
          </button>
        ) : (
          <button onClick={handleAddCart} className=" text-sm border border-black px-3 py-1">
            Add Cart
          </button>
        )}
        
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
