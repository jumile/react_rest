import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalWindow} from './Components/ModalWindow';

function App() {

const [openItem, setOpenItem] = React.useState(null);


  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem = {setOpenItem} />
      <ModalWindow openItem = {openItem} setOpenItem = {setOpenItem} />
    </>
    
  );
}

export default App;
