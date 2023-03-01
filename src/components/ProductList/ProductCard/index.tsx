import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { ArrayProducts } from '../../../contexts/GetProducts';

interface productsListProps {
  productsList: ArrayProducts
}

const ProductCard = ({ productsList }: productsListProps) => (
  <StyledProductCard>
    <div className='imageBox'>
      <img src={productsList.img} alt='Hamburguer' />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {productsList.name}
      </StyledTitle>
      <StyledParagraph className='category'>{productsList.category}</StyledParagraph>
      <StyledParagraph className='price'>R$ {productsList.price}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
);

export default ProductCard;
