import { useContext, useState } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { ListPtoductsCartContext } from '../../../contexts/ProductsCart';

const CartProductList = () => {
  const { listCart, setListCart } = useContext(ListPtoductsCartContext);

  const removeAllproducts = () => {
    setListCart([]);
  };

  const values: number[] = []
  listCart.filter((products) => values.push(products.price)
  );

  const soma = values.reduce((ac: number, cv: number) => ac + cv, 0)

  return (
    <StyledCartProductList>
      <ul>
        {listCart.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ {soma}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        type='submit'
        onClick={() => removeAllproducts()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
