import { createContext, ReactNode, useState } from 'react';

interface VerificationModalProviderProps {
  children: ReactNode;
}

interface VerificationModalContextProps {
  openModal: () => void;
  closeModal: () => void;
  modal: boolean
}

export const VerificationModalContext = createContext(
  {} as VerificationModalContextProps
);

export const VerificationModalProvider = ({
  children,
}: VerificationModalProviderProps) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <VerificationModalContext.Provider value={{ openModal, closeModal, modal }}>
      {children}
    </VerificationModalContext.Provider>
  );
};
