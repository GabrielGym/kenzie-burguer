import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { ArrayProducts } from '../../../../contexts/GetProducts';

interface productsListProps {
  product: ArrayProducts;
}

const CartProductCard = ({ product }: productsListProps) => (
  <StyledCartProductCard>
    <div className='imageBox'>
      <img src={product.img} alt='Hamburguer' />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
      </StyledTitle>
      <button type='button' aria-label='Remover'>
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
);

export default CartProductCard;
