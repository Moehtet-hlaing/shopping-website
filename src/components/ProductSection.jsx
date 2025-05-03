import ProductCard from "./ProductCard";
import Container from './Container';
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";

const productSection = () => {
 const {products} = useProductStore();
 const {categories} = useCategoryStore();
 const currentCategory = categories.find((category) => category.isActive === true);
 const filteredProducts = products.filter(
  (product) =>
    currentCategory.name === "All" || product.category === currentCategory.name
);

  return (
    <section className="px-5 mb-5">
      <Container>
      <p className=" text-sm text-gray-600 mb-2">Available Product Lists</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {filteredProducts.map((product) => ( <ProductCard key={product.id} product={product}/>
        ))}
      </div>
      </Container>
    </section>
  );
};

export default productSection;
