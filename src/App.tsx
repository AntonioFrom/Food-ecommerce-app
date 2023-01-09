import React from 'react';
import Header from './stories/component/header/header.component';
import MenuList from './stories/modules/menu-list/menu-list.component';
import burger from "./mocks/burger.json"
import Footer from './stories/component/footer/footer.component';

function App() {
  return (
    <div >
      <Header/>
      <div className='mt-12 mx-12 '>

      <MenuList items={burger}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;



