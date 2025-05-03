import CategoryButton from './CategoryButton';
import Container from './Container';
import useCategoryStore from '../store/useCategoryStore';


const CategorySection = () => {
    const title = "Product Categories";
    const {categories} = useCategoryStore();
   
  return (
    <section id="categories-section" className="p-5">
        <Container>
        <p className=" text-sm text-gray-600 mb-2">{title}</p>
        <div className='flex overflow-x-scroll category-button-group'>
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
        </Container>
      </section>
  )
}

export default CategorySection