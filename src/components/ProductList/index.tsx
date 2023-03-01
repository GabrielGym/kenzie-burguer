import { useContext } from "react"
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { GetProductsContext } from '../../contexts/GetProducts';

const ProductList = () => {
  const { listProducts } = useContext(GetProductsContext)

  return (
    <StyledProductList>
      {listProducts.map((productsList) => <ProductCard productsList={productsList} key={productsList.id}/>)}
    </StyledProductList>
  );
};

export default ProductList;
