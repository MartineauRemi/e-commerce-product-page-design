import { useState } from 'react'
import Header from './components/layout/Header'
import GlobalStyle from './GlobalStyle'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [cartActive, setCartActive] = useState(false)

  return (
    <div className="App">
      <GlobalStyle/>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        cartActive={cartActive}
        setCartActive={setCartActive}
      />
    </div>
  );
}

export default App;
