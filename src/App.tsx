import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces/interface";
import { productValidation } from "./validation/productValidation";
import ErrorMsg from "./components/ui/ErrorMsg";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";
import SelectMenu from "./components/ui/SelectMenu";
import { ProductNameTypes } from "./types";

import toast, { Toaster } from 'react-hot-toast';

function App() {
  const ProductDefault = {
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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenEditModal, setIsOpenEditModal,] = useState(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal,] = useState(false);
  
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(ProductDefault);
  
  const [productToEdit, setProductToEdit] = useState<IProduct>(ProductDefault);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);


  const [tempColor, setTempColor] = useState<string[]>([]);


  // console.log(productToEdit)
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  // Handler
  const openModal = () => {setIsOpen(true);};
  const closeModal = () => {setIsOpen(false);};

  // -------------------------------------------------
  const closeEditModal = () => {setIsOpenEditModal(false);};
  const openEditModal = () => {setIsOpenEditModal(true);};
  
  const closeRemoveModal = () => {setIsOpenRemoveModal(false);};
  const openRemoveModal = () => {setIsOpenRemoveModal(true);};
  

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  
  // -----------------------------------
  
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });

   
  };
// -----------------------------------------
 


  const clearErrors = () => {
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
    });
  };

  const onCancel = () => {
    closeModal();
    setProduct(ProductDefault);
    clearErrors()
    closeEditModal()
    closeRemoveModal()
  };


  const removeProductHandler =()=>{
    const filtered = products.filter(product => product.id !== productToEdit.id)
    setProducts(filtered)
    console.log(products)
    closeRemoveModal()
    toast("Product removed successfully ", {icon:"✔",duration: 2000, style:{backgroundColor:"black", fontSize:"16px", color:"white"}})
  }

  // MAKE SUBMIT HANDLER
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    const hasErrorMSG =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMSG) {
      setErrors(errors);
      return;
    }

    // setProducts([product , ...products]);
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColor, category: selectedCategory }, ...prev]);
    // setProducts(products.concat(product));

    setProduct(ProductDefault);

    setTempColor([]);
    closeModal();
    toast("Product added successfully ", {icon:"✔",duration: 2000, style:{backgroundColor:"black", fontSize:"16px", color:"white"}})
  };

  // End SUBMIT HANDLER
  // --------------------------------
  

  // MAKE SUBMIT Edit HANDLER
  const OnEditSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });


    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    const updatedProduct = [...products];
    updatedProduct[productToEditIndex] = {...productToEdit , colors: tempColor.concat(productToEdit.colors)}
    setProducts(updatedProduct);

    setProductToEdit(ProductDefault);
    setTempColor([]);
    closeEditModal();
    toast("product modified successfully", {icon:"✔",duration: 2000, style:{backgroundColor:"black", fontSize:"18px", color:"white"}})
  };
  
  // End SUBMIT Edit HANDLER
  // --------------------------------

  //Make map on array of product to render the products
  const renderProductList = products.map((product, index) => (

    <ProductCard
    key={product.id}
    product={product}
    setProductToEdit={setProductToEdit}
    openEditModal={openEditModal}
    setProductToEditIndex={setProductToEditIndex}
    index={index}
    openRemoveModal={openRemoveModal}
    />
  ));

  // make map on array of inputs to render the inputs
  const renderInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-fray-700"
      >
        {input.label}
      </label>
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
  const renderColorsList = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        // setTempColor(prev => {
        // //   if (prev.includes(color)) {
        // //     return prev;
        // //   }
        // //   return prev.concat(color)
        // // });

        if (tempColor.includes(color)) {
          setTempColor((prev) =>
            prev.filter((itemColor) => itemColor !== color)
          );
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColor((prev) =>
            prev.filter((itemColor) => itemColor !== color)
          );
          return;
        }
        setTempColor((prev) => prev.concat(color));
      }}

      
    />
  ));


  const renderChosenColors = tempColor.map((color) => (
    <span
      key={color}
      className="rounded-md text-xs px-1 text-white"
      style={{ background: color }}
    >
      {color}
    </span>
  ));

  const renderProductEditWithErrorMsg = (id:string, label:string, name:ProductNameTypes ) => {
    return(
      <div className="flex flex-col">
      <label htmlFor={id} className="mb-[2px] text-sm font-medium text-fray-700">{label}</label>
      <Input
        id={id}
        name={name}
        value={productToEdit[name]}
        onChange={onChangeEditHandler}
      />
      <ErrorMsg msg={errors[name]} />
        </div>
    ) 
  }
  return (
    <main className="container">
      {/* This is the button to add modal  */}
      <Button
        className={`bg-indigo-600 flex justify-center mx-auto items-center `}
        width="w-fit"
        onClick={openModal}>Add Modal</Button>

      {/* This is all the products  */}
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md">{renderProductList}</div>

      {/* Add Product Modal  */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add A New Product">
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderInputList}
          <SelectMenu
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          <div className="flex gap-1 my-4 flex-wrap">{renderChosenColors}</div>
          <div className="flex gap-1  my-6 flex-wrap">{renderColorsList}</div>

          <div className="flex items-center space-x-3">
            <Button className={`bg-indigo-500 hover:bg-indigo-600`}>
              submit
            </Button>
            <Button
              className={`bg-gray-500 hover:bg-gray-600`}
              onClick={onCancel}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
      {/* ------------------------------------------------ */}

      {/* Edit product modal  */} 
      <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="Edit Product">
        <form className="space-y-2" onSubmit={OnEditSubmit}>
        {renderProductEditWithErrorMsg("title" , "Product Title" , "title")}
        {renderProductEditWithErrorMsg("description" , "Product Description" , "description")}
        {renderProductEditWithErrorMsg("imageURL" , "Product imageURL" , "imageURL")}
        {renderProductEditWithErrorMsg("price" , "Product Price" , "price")}
        
        <SelectMenu selected={productToEdit.category} setSelected={(value) => setProductToEdit({...productToEdit, category: value})}/>
        
        {tempColor.concat( productToEdit.colors).map((color) => (
          
          <span
            key={color}
            className="rounded-md text-xs px-1 text-white"
            style={{ background: color }}
            
          >
            {color}
          </span>
        ))
      }
        <div className="flex gap-1  my-6 flex-wrap">{renderColorsList}</div>
        <div className="space-x-3 flex items-center">
            <Button className="bg-indigo-600 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-600"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Remove the product  */}
      <Modal isOpen={isOpenRemoveModal} closeModal={closeRemoveModal} title="Remove Product" description="Are you sure you want to remove this product">

        <div className="space-x-3 flex items-center">
            <Button className="bg-red-600 hover:bg-red-700" onClick={removeProductHandler}>
              Yes, Remove
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-600"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
      </Modal>

      <Toaster/>
    </main>
  );
}

export default App;
