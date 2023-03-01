import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { ArrayProducts } from '../../../contexts/GetProducts';
import { ListPtoductsCartContext } from '../../../contexts/ProductsCart';

interface productCartProps {
  productCart: ArrayProducts;
}

const CartProductList = () => {
  const { listCart } = useContext(ListPtoductsCartContext);

  return (
    <StyledCartProductList>
      <ul>
        {listCart.map((product) => <CartProductCard key={product.id} product={product} />)}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ 14,00</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
