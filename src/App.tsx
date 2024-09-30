import { ChangeEvent, MouseEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces/interface";
import { productValidation } from "./validation/productValidation";
import ErrorMsg from "./components/ui/ErrorMsg";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from 'uuid';




function App() {
  const defaultProductOJC = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // State
  const [isOpen, setIsOpen] = useState(false);

  const [tempColor , setTempColor] = useState<string[]>([])
  
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
});
console.log(tempColor)

  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductOJC);
  // Handler
  function closeModal() {
    setIsOpen(false);
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: ''
    })
  };


  const clearErrors =()=>{
    setErrors({
      title: '',
      description: '',
      imageURL: '',
      price: '',
    })
  }

  const onCancel = (event: MouseEvent<HTMLButtonElement>):void => {
    event.preventDefault();
    closeModal();
    setProduct(defaultProductOJC);
    clearErrors()
  };

  // Render
  const openModal = () => {
    setIsOpen(true);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = product;

    const errors = productValidation({ title, description, imageURL, price });
    const hasErrorMSG =
      Object.values(errors).some((value) => value === "") && Object.values(errors).every((value) => value === "");

    if (!hasErrorMSG) {
      setErrors(errors)
      return;
    }
    
    
    // setProducts([product , ...products]);
    setProducts(prev => [{...product , id: uuid() , colors: tempColor} , ...prev]);
    // setProducts(products.concat(product));
    setProduct(defaultProductOJC);
    setTempColor([])
    closeModal()

  };

  console.log(products)

  //Make map on array of product to render the products
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  // make map on array of inputs to render the inputs
  const renderInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  // Make map on the color to render them 
  const renderColorsList = colors.map(color => <CircleColor key={color} color={color} onClick={()=>{

    // setTempColor(prev => {
    // //   if (prev.includes(color)) {
    // //     return prev;
    // //   }
    // //   return prev.concat(color)
    // // });
    
    if(tempColor.includes(color)){
      setTempColor(prev => prev.filter(itemColor => itemColor !== color))
      return;
    }
    setTempColor(prev => prev.concat(color));
  
  }}
/>)




  const renderChosenColors = tempColor.map(color => <span key={color} className="rounded-md text-xs px-1 text-white" style={{background:color}}>{color}</span>)

  return (
    <main className="container">
      <Button className={`bg-indigo-600`} width="w-fit" onClick={openModal}>Add Modal</Button>

      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderInputList}
          <div className="flex gap-1  flex-wrap">{renderChosenColors}</div>
          <div className="flex gap-1 flex-wrap">{renderColorsList}</div>

          <div className="flex items-center space-x-3">

            <Button className={`bg-indigo-500 hover:bg-indigo-600`}>submit</Button>
            <Button className={`bg-gray-500 hover:bg-gray-600`} onClick={onCancel}>cancel</Button>

          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
