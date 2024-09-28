
import { useState } from 'react';
import ProductCard from './components/ProductCard'
import Modal from './components/UI/Modal'
import { productList } from './data'
import Button from './components/UI/Button'

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

  const renderProductList = productList.map(prodcut => <ProductCard key={prodcut.id} product={prodcut}/>)
  return (
    <main className='container'>
      <Button className={`bg-indigo-600`} width="w-fit" onClick={openModal}>Add Modal</Button>

      <Modal isOpen={isOpen} closeModal={closeModal} title='Add A New Product'>

       <div className='flex items-center space-x-3'>
        <Button className={`bg-indigo-500 hover:bg-indigo-600`}>submit</Button>
        <Button className={`bg-gray-500 hover:bg-gray-600`}>cancel</Button>
       </div>
      </Modal>
      <div className=' m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md'>
      {renderProductList}
     </div>
    </main>
  )
}

export default App
