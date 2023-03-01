import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { ArrayProducts } from '../../../../contexts/GetProducts';
import { ListPtoductsCartContext } from '../../../../contexts/ProductsCart';

interface productsListProps {
  product: ArrayProducts;
}

const CartProductCard = ({ product }: productsListProps) => {
  const { listCart, setListCart } = useContext(ListPtoductsCartContext);
  const removerProductsCart = (productId: number) => {
    const newList = listCart.filter((products) => products.id !== productId);
    setListCart(newList);
  };

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => removerProductsCart(product.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
