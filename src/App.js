import { useState } from 'react'
import Product from './components/layout/Product'
import Header from './components/layout/Header'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import { data } from './data/products'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 4.5rem;

  @media screen and (min-width: 1024px){
    padding-top: 7.75rem;
  }
`

const Main = styled.main`
  width: 100%;
  max-width: var(--layout-max-width);
`

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [shoppingCartActive, setShoppingCartActive] = useState(false)
  const [shoppingCartItems, setShoppingCartItems] = useState([])

  console.log(shoppingCartItems)

  return (
    <AppContainer className="App">
      <GlobalStyle/>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        shoppingCartActive={shoppingCartActive}
        setShoppingCartActive={setShoppingCartActive}
        shoppingCartItems={shoppingCartItems}
        setShoppingCartItems={setShoppingCartItems}
      />
      <Main>
        {data.map(product => (
            <Product
              key={product.id}
              data={product}
              shoppingCartItems={shoppingCartItems}
              setShoppingCartItems={setShoppingCartItems}
            />
          )
        )}
      </Main>
    </AppContainer>
  );
}

export default App;
