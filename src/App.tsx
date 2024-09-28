
import { useState } from 'react';
import ProductCard from './components/ProductCard'
import Modal from './components/UI/Modal'
import { formInputsList , productList } from './data'
import Button from './components/UI/Button'
import Input from './components/UI/Input'

function App() {
  // State 
  const [isOpen, setIsOpen] = useState(false);

  // Handler 
  function closeModal() {
    setIsOpen(false);
  }
  // Render 
  function openModal() {
    setIsOpen(true);
  }

  //Make map on array of product to render the products 
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product}/>)

  // make map on array of inputs to render the inputs 
  const renderInputList = formInputsList.map(input => 
  <div className='flex flex-col'>
    <label htmlFor={input.id}>{input.label}</label>
    <Input id={input.id} name={input.name} />
  </div>
  )

  return (
    <main className='container'>
      <Button className={`bg-indigo-600`} width="w-fit" onClick={openModal}>Add Modal</Button>


      <div className=' m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md'>
      {renderProductList}
     </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title='Add A New Product'>
        <form className='space-y-2 '>
          {renderInputList}
          <div className='flex items-center space-x-3'>
            <Button className={`bg-indigo-500 hover:bg-indigo-600`}>submit</Button>
            <Button className={`bg-gray-500 hover:bg-gray-600`}>cancel</Button>
          </div>
       </form>
      </Modal>
    </main>
  )
}

export default App
