import { createContext, ReactNode, useEffect, useState } from 'react';
import { Api } from '../../services/Api';

interface GetProductsProviderProps {
  children: ReactNode;
}

interface GetProductsContextProps {
  listProducts: ArrayProducts[];
}

export interface ArrayProducts {
  id: number
  name: string
  category: string
  price: number
  img: string
}
export const GetProductsContext = createContext({} as GetProductsContextProps);

export const GetProductsProvider = ({ children }: GetProductsProviderProps) => {
  const [listProducts, setListProducts] = useState([] as ArrayProducts[]);
  const token = localStorage.getItem('@TOKEN');

  useEffect(() => {
    async function GetProducts(){
      try {
        const response = await Api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setListProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetProducts()
  });

  return (
    <GetProductsContext.Provider value={{ listProducts }}>
      {children}
    </GetProductsContext.Provider>
  );
};


