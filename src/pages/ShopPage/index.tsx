import { useContext } from "react"
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { VerificationModalContext } from '../../contexts/Verifications';
import { GetProductsProvider } from "../../contexts/GetProducts";
import { ListPtoductsCartProvider } from "../../contexts/ProductsCart";

const ShopPage = () =>{
  const { modal } = useContext(VerificationModalContext) 
return (
   <GetProductsProvider>
    <ListPtoductsCartProvider>
    <StyledShopPage>
    {modal ? <CartModal /> : null}
    
    <Header />
    <main>
      <StyledContainer containerWidth={1300}>
       
          <ProductList />
        
      </StyledContainer>
    </main>
  </StyledShopPage>
    </ListPtoductsCartProvider>
  </GetProductsProvider>
)};

export default ShopPage;
