
import './App.css'
import Button from './components/common/Button'
import Input from './components/common/Input'
import Spinner from './components/common/Spinner'
import ProductCard from './components/product/ProductCard'

function App() {

  return (
    <>
      <ProductCard />
      <Spinner />
      <Input labelTitle={"việt ngu"}/>
      <Button title='Việt ngu'/>
    </>
  )
}

export default App
