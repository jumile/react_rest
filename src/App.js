import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalWindow} from './Components/Modal/ModalWindow';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';

function App() {

const openItem = useOpenItem();
const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalWindow {...openItem} {...orders} />} {/*проверка, что выбран товар (в хуке openItem св-во openItem не undefined)*/}
    </>
    
  );
}

export default App;
