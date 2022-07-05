import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

export default function App() {
  const [isNewTransactionModalOpen, setIsnewTransactionModalOpen] = useState<boolean>(false);

  function handleOpenNewTransactionModal() {
      setIsnewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsnewTransactionModalOpen(false);
  }
  return (
    <>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}

