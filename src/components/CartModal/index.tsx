import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { VerificationModalContext } from '../../contexts/Verifications';
import { ListPtoductsCartContext } from '../../contexts/ProductsCart';

const CartModal = () => {
  const { closeModal } = useContext(VerificationModalContext);
  const { listCart } = useContext(ListPtoductsCartContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              closeModal();
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {listCart.length <= 0 ? (
            <div className='emptyBox'>
              <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign='center'>
                Adicione itens
              </StyledParagraph>
            </div>
          ) : (
            <CartProductList />
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
