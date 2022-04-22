import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalWindow} from './Components/ModalWindow';
import { Order } from './Components/Order';

function App() {

const [openItem, setOpenItem] = React.useState(null);


  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu setOpenItem = {setOpenItem} />
      <ModalWindow openItem = {openItem} setOpenItem = {setOpenItem} />
    </>
    
  );
}

export default App;
