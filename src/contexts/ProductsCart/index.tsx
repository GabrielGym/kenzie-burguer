import { createContext, ReactNode, useState } from 'react';
import { ArrayProducts } from '../GetProducts';

interface ListPtoductsCartProviderProps {
  children: ReactNode;
}

interface ListPtoductsCartContextProps {
  listCart: ArrayProducts[];
  setListCart: React.Dispatch<React.SetStateAction<ArrayProducts[]>>;
}

export const ListPtoductsCartContext = createContext(
  {} as ListPtoductsCartContextProps
);

export const ListPtoductsCartProvider = ({
  children,
}: ListPtoductsCartProviderProps) => {
  const [listCart, setListCart] = useState([] as ArrayProducts[]);

  return (
    <ListPtoductsCartContext.Provider value={{ listCart, setListCart}}>
      {children}
    </ListPtoductsCartContext.Provider>
  );
};
